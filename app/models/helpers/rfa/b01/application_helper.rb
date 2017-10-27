class Helpers::Rfa::B01::ApplicationHelper < Helpers::ModelHelperBase
  def model_class
    Rfa::B01::Application
  end

  def create_application(applicationId, applicantId, api_url_path)
    model_class.create_application(auth_header, applicationId, applicantId, api_url_path)
  end

  def all(applicationId)
    model_class.all(auth_header, applicationId)
  end
end
