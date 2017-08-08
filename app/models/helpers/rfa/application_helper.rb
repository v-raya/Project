class Helpers::Rfa::ApplicationHelper < Helpers::ModelHelperBase

  def model_class
    Rfa::Application
  end

  def create_application
    Rfa::Application.create_application(auth_header)
  end

  def all_expanded
    Rfa::Application.all_expanded(auth_header)
  end

  def name_types
    Rfa::Application.name_types(auth_header)
  end

  def phone_types
    Rfa::Application.phone_types(auth_header)
  end
end
