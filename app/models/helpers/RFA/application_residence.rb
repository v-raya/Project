class Helpers::RFA::ApplicationResidence < Helpers::ModelHelperBase

  def model_class
    RFA::ApplicationResidence
  end

  def create(parent_id, body)
    model_class.create(auth_header, parent_id, body)
  end

end
