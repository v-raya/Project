class Helpers::RFA::Application < Helpers::ModelHelperBase

  def model_class
    RFA::RfaApplication
  end

  def name_types
    RFA::Application.name_types(auth_header)
  end

  def phone_types
    RFA::Application.phone_types(auth_header)
  end

end
