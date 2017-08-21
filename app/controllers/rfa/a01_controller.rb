class Rfa::A01Controller < CalsBaseController

  def index
    @applications = rfa_application_helper.all
  end

  def create
    # make api call to create application
    rfa_app_response = rfa_application_helper.create_application
    rfa_application = Rfa::Application.new(rfa_app_response['id'])
    redirect_to  edit_rfa_a01_path(rfa_application.id)
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

  end

  def update
    application_response = {}
    application_response[:applicants] = process_items_for_persistance(applicant_params, rfa_applicant_helper, params[:id]) if params[:applicants].present?
    application_response[:residence] = process_items_for_persistance(residence_params, rfa_residence_helper, params[:id])if params[:residence].present?
    application_response[:minorChildren] = process_items_for_persistance(minor_children_params, rfa_minor_children_helper, params[:id]) if params[:minorChildren].present?
    application_response[:otherAdults] = process_items_for_persistance(other_adults_params, rfa_other_adults_helper, params[:id]) if params[:otherAdults].present?
    application_response[:fosterCareHistory] = process_items_for_persistance(adoption_history_params, rfa_adoption_history_helper, params[:id]) if params[:fosterCareHistory].present?
  end

  private

  def applicant_params
    params.require(:applicants).map do |applicant|
      applicant.permit!
      ActionController::Parameters.new(applicant.to_h).permit(:id, :email,
      :date_of_birth, :first_name, :middle_name, :last_name, :driver_license_number,
      {:employment=>[:employer_name, :occupation, :income, :income_type=>[:id, :value],
        :physical_address=>[:street_address, :city, :zip, :state=>[:id, :value]]]},
        {:highest_education_level =>[:id, :value]}, {:gender =>[:id, :value]},
        {:ethnicity => [:id, :value]}, {:driver_license_state=>[:id, :value]},
        :phones => [:number, :preferred, :phone_type => [:id,:value]], :other_names => [])
      end

    end


    def residence_params
      params.require(:residence).permit(:id, :physical_mailing_similar, :weapon_in_home,
      :body_of_water_exist, :body_of_water_description, :others_using_residence_as_mailing,
      :directions_to_home, :residence_ownership=>[:id, :value], :home_languages=>[:id, :value],
      :other_people_using_residence_as_mailing =>[:first_name, :middle_name, :last_name],
      :physical_address =>[:street_address, :zip, :city, :state=>[:id, :value]],
      :addresses=>[:street_address, :zip, :city, :state=>[:id, :value],:type=>[:id, :value]])
    end

    def minor_children_params
      #TODO: applicant id
      params.require(:minorChildren).map do |minor|
        minor.permit!
        ActionController::Parameters.new(minor.to_h).permit(
        :id, :child_financially_supported, :date_of_birth, :child_adopted, :gender =>[:id, :value],
        :relationship_to_applicants=>[:relationship_to_applicant=>[:id, :value]])
      end
    end

    def other_adults_params
      #TODO: applicant id
      params.require(:otherAdults).map do |adult|
        adult.permit!
        ActionController::Parameters.new(adult.to_h).permit(
        :id, :first_name, :middle_name, :last_name, :date_of_birth,
        :relationship_to_applicants=>[ :relationship_to_applicant=>[:id, :value]])
      end
    end

    def adoption_history_params
      params.require(:fosterCareHistory).permit(:id, :was_subject_for_exclusion_order_q7,
      :foster_care_licenses_q1 =>[:was_previously_licensed, :agencies =>[:name, :type=>[:id, :value]]],
      :applications_for_adoption_q2 => [:have_applied_for_adoption, :facilities => []],
      :facility_operation_licenses_q3 =>[:was_previously_licensed, :agencies =>[:name, :type=>[:id, :value]]],
      :employment_in_facilities_q4 => [:was_employed_or_volunteered, :facilities => []],
      :denial_history_q5 =>[:had_denials, :agencies =>[:name, :type=>[:id, :value]]],
      :suspension_revocation_history_q6 =>[:had_suspensions_revocations, :agencies =>[:name, :type=>[:id, :value]]])
    end

    def process_items_for_persistance(items, helper, parent_id)
      if items.is_a?(Array)
        result = []
        items.each do |item|
          result  << create_or_update(item, helper, parent_id)
        end
      else
        result = create_or_update(items, helper, parent_id)
      end
      return result
    end

    def create_or_update(item, helper, parent_id)
      if item[:id]
        result = helper.update(parent_id, item[:id], item.to_json)
      else
        result = helper.create(parent_id, item.to_json)
      end
      return result
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

    def dictionaries_helper
      Helpers::Dictionary.new(auth_header: get_session_token)
    end

end
