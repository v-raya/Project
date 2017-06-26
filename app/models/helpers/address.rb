class Helpers::Address < Helpers::ModelHelperBase

  def model_class
    Address
  end

  def states
    Address.states(auth_header)
  end

end
