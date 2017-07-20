class Helpers::Rfa::ApplicationResidence < Helpers::ModelHelperBase

  def model_class
    Rfa::ApplicationResidence
  end

  def create(parent_id, body)
    model_class.create(auth_header, parent_id, body)
  end

end
