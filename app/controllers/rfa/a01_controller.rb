class Rfa::A01Controller < CalsBaseController

  def show
  end

  def create
    # make api call to create application
    rfa_app_response = rfa_application_helper.create_application
    #TODO: some method here to return our application object more betterly
    rfa_application = RFA::Application.new(rfa_app_response['id'])
    redirect_to  edit_rfa_a01_path(rfa_application.id)
  end

  def edit
    # @all dictionaries
    @name_types = rfa_application_helper.name_types
    @phone_types = rfa_application_helper.phone_types
    @gender_types = rfa_applicant_helper.gender_types
    @education_levels = rfa_applicant_helper.education_levels
    @language_types =  rfa_applicant_helper.language_types
    @state_types = rfa_applicant_helper.state_types
    @salary_types = rfa_applicant_helper.salary_types
    @residence_types =  rfa_applicant_helper.residence_types

    @ethnicity_types = dictionaries_helper.ethnicity_types
  end

  def update

  end

  private

  def rfa_application_helper
    Helpers::RFA::Application.new(auth_header: session['token'])
  end

  def rfa_applicant_helper
    Helpers::RFA::Applicant.new(auth_header: session['token'])
  end

  def dictionaries_helper
    Helpers::Dictionary.new(auth_header: session['token'])
  end

end
