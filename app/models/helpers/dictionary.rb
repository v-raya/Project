class Helpers::Dictionary < Helpers::ModelHelperBase

  def all(model_class)
    model_class.all(auth_header)
  end

end
