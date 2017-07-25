class Helpers::Rfa::ApplicationResidenceHelper  < Helpers::ModelHelperBase

  def model_class
    Rfa::ApplicationResidence
  end

  def create(parent_id, body)
    model_class.create(auth_header, parent_id, body)
  end

  def find_by_application_id(parent_id)
    model_class.find_by_application_id(auth_header, parent_id)
  end

end
