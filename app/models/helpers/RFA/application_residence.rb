class Helpers::RFA::ApplicationResidence < Helpers::ModelHelperBase

  def model_class
    RFA::ApplicationResidence
  end

  def create(parent_id, body)
    model_class.create(auth_header, parent_id, body)
  end

  def residence_types
    RFA::ApplicationResidence.residence_types(auth_header)
  end

end
