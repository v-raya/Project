class Rfa::A01Controller < CalsBaseController
  def index
    @applications = rfa_application_helper.all
  end

  def create
    # make api call to create application
    rfa_app_response = rfa_application_helper.create_application
    rfa_application = Rfa::Application.new(rfa_app_response['id'])
    redirect_to edit_rfa_a01_path(rfa_application.id)
  end

  def edit
    # @all dictionaries
    @dictionaries = dictionaries_helper.rfa_a01_dictioniaries
    @application = rfa_application_helper.find_by_id(params[:id])
    @application.applicants = rfa_applicant_helper.find_items_by_application_id(params[:id])
    @application.residence = rfa_residence_helper.find_by_application_id(params[:id])
    @application.minorChildren = rfa_minor_children_helper.find_items_by_application_id(params[:id])
    @application.otherAdults = rfa_other_adults_helper.find_items_by_application_id(params[:id])
    @application.fosterCareHistory = rfa_adoption_history_helper.find_by_application_id(params[:id])
    @application.relationshipBetweenApplicants = rfa_relation_between_applicants_helper.find_by_application_id(params[:id])
    @application.references = rfa_references_helper.find_items_by_application_id(params[:id])

  end

  def update
    @application_response = {}
    @application_response[:applicants] = process_items_for_persistance(applicant_params, rfa_applicant_helper, params[:id]) if params[:applicants].present?
    @application_response[:residence] = process_items_for_persistance(residence_params, rfa_residence_helper, params[:id]) if params[:residence].present?
    @application_response[:minorChildren] = process_items_for_persistance(minor_children_params, rfa_minor_children_helper, params[:id]) if params[:minorChildren].present?
    @application_response[:otherAdults] = process_items_for_persistance(other_adults_params, rfa_other_adults_helper, params[:id]) if params[:otherAdults].present?
    @application_response[:fosterCareHistory] = process_items_for_persistance(adoption_history_params, rfa_adoption_history_helper, params[:id]) if params[:fosterCareHistory].present?
    @application_response[:relationshipBetweenApplicants] = process_items_for_persistance(relationship_between_applicants_params, rfa_relation_between_applicants_helper, params[:id]) if params[:relationshipBetweenApplicants].present?
    @application_response[:references] = process_items_for_persistance(references_params, rfa_references_helper,
                                                                       params[:id]) if params[:references].present?

  end

  private

  def applicant_params
    params.require(:applicants).map do |applicant|
      applicant.permit!
      ActionController::Parameters.new(applicant.to_h).permit(:id, :email,
                                                              :date_of_birth, :first_name, :middle_name, :last_name, :driver_license_number,
                                                              {name_suffix: %i[id value]},{ name_prefix: %i[id value]},
                                                              { employment: [:employer_name, :occupation, :income, income_type: %i[id value],
                                                                             physical_address: [:street_address, :city, :zip, state: %i[id value]]] },
                                                              { highest_education_level: %i[id value] }, { gender: %i[id value] },
                                                              { ethnicity: %i[id value] }, { driver_license_state: %i[id value] },
                                                              phones: [:number, :preferred, phone_type: %i[id value]],
                                                              other_names: [:first_name, :middle_name, :last_name, name_type: %i[id value],
                                                                            name_suffix: %i[id value], name_prefix: %i[id value]])
    end
  end

  def residence_params
    params.require(:residence).permit(:id, :physical_mailing_similar, :weapon_in_home,
                                      :body_of_water_exist, :body_of_water_description, :others_using_residence_as_mailing,
                                      :directions_to_home, residence_ownership: %i[id value], home_languages: %i[id value],
                                      other_people_using_residence_as_mailing: %i[first_name middle_name last_name],
                                      physical_address: [:street_address, :zip, :city, state: %i[id value]],
                                      addresses: [:street_address, :zip, :city, state: %i[id value], type: %i[id value]])
  end

  def minor_children_params
    params.require(:minorChildren).map do |minor|
      minor.permit!
      minor = set_relationship_to_applicants(minor, @application_response[:applicants])
      ActionController::Parameters.new(minor.to_h).permit(
        :id, :child_financially_supported, :date_of_birth, :child_adopted, gender: %i[id value],
        relationship_to_applicants: [:applicant_id, relationship_to_applicant: %i[id value]]
      )
    end
  end

  def other_adults_params
    params.require(:otherAdults).map do |adult|
      adult.permit!
      adult = set_relationship_to_applicants(adult, @application_response[:applicants])
      ActionController::Parameters.new(adult.to_h).permit(
        :id, :first_name, :middle_name, :last_name, :date_of_birth,
        relationship_to_applicants: [:applicant_id, relationship_to_applicant: %i[id value]]
      )
    end
  end

  def relationship_between_applicants_params
    params.require(:relationshipBetweenApplicants).permit(:other_relationship, :place_of_relationship_city,
                                                          :date_of_relationship, relationship_type: %i[id value],
                                                          place_of_relationship_state: %i[id value])
  end

  def adoption_history_params
    params.require(:fosterCareHistory).permit(:id, :was_subject_for_exclusion_order_q7,
                                              foster_care_licenses_q1: [:was_previously_licensed, agencies: [:name, type: %i[id value]]],
                                              applications_for_adoption_q2: [:have_applied_for_adoption, facilities: []],
                                              facility_operation_licenses_q3: [:was_previously_licensed, agencies: [:name, type: %i[id value]]],
                                              employment_in_facilities_q4: [:was_employed_or_volunteered, facilities: []],
                                              denial_history_q5: [:had_denials, agencies: [:name, type: %i[id value]]],
                                              suspension_revocation_history_q6: [:had_suspensions_revocations, agencies: [:name, type: %i[id value]]])
  end

  def references_params
    permitted_params = params.permit(references: [:first_name, :middle_name, :last_name, :phone_number,:email,
                                                :phone_number, :email,
                               mailing_address: [:street_address, :zip, :city, state: %i[id value]],name_prefix: %i[id value], name_suffix: %i[id value]])

    permitted_params[:items] = permitted_params.delete(:references)
    permitted_params
  end

  def process_items_for_persistance(items, helper, parent_id)
    result = []
    if items.is_a?(Array)
      items.each do |item|
        result << create_or_update(item, helper, parent_id)
      end
    else
      result = create_or_update(items, helper, parent_id)
    end
    result
  end

  def create_or_update(item, helper, parent_id)
    item[:id] ? helper.update(parent_id, item[:id], item.to_json) : helper.create(parent_id, item.to_json)
  end

  def set_relationship_to_applicants(parameters, response)
    applicant_names = response.map { |app| [app.id, "#{app.first_name} #{app.middle_name} #{app.last_name}".squish] }.to_h
    if 0.eql?(parameters['relationship_to_applicants'][0]['applicant_id'].to_i)
      parameters['relationship_to_applicants'][0].merge!(ActionController::Parameters.new('applicant_id' => applicant_names.key(parameters['relationship_to_applicants'][0]['applicant_id'])).permit!)
    end
    parameters
  end

  def rfa_application_helper
    Helpers::Rfa::ApplicationHelper.new(auth_header: get_session_token)
  end

  def rfa_applicant_helper
    Helpers::Rfa::ApplicantHelper.new(auth_header: get_session_token)
  end

  def rfa_residence_helper
    Helpers::Rfa::ApplicationResidenceHelper.new(auth_header: get_session_token)
  end

  def rfa_adoption_history_helper
    Helpers::Rfa::AdoptionHistoryHelper.new(auth_header: get_session_token)
  end

  def rfa_minor_children_helper
    Helpers::Rfa::ApplicationMinorChildrenHelper.new(auth_header: get_session_token)
  end

  def rfa_other_adults_helper
    Helpers::Rfa::ApplicationOtherAdultsHelper.new(auth_header: get_session_token)
  end

  def rfa_relation_between_applicants_helper
    Helpers::Rfa::ApplicationRelationApplicantsHelper.new(auth_header: get_session_token)
  end

  def rfa_references_helper
    Helpers::Rfa::ApplicationReferencessHelper.new(auth_header: get_session_token)
  end

  def dictionaries_helper
    Helpers::Dictionary.new(auth_header: get_session_token)
  end
end
