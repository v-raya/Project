class Helpers::RFA::Application < Helpers::ModelHelperBase

  def model_class
    RFA::Application
  end

  def create_application
    RFA::Application.create_application(auth_header)
  end

  def name_types
    RFA::Application.name_types(auth_header)
  end

  def phone_types
    RFA::Application.phone_types(auth_header)
  end

end
