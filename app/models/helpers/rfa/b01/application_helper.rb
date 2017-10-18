class Helpers::Rfa::B01::ApplicationHelper < Helpers::ModelHelperBase
  def model_class
    Rfa::B01::Application
  end

  def create_application
    model_class.create_rfa_b01_application(auth_header)
  end
end
