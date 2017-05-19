class Helpers::ModelHelperBase
  include ActiveModel::Model

  attr_accessor :model_class
  attr_accessor :authn_header

  def initialize(args = {})
    self.authn_header = args[:authn_header]
  end

  def find_by_id(id)
    self.model_class.find_by_id(id, self.authn_header)
  end

  def all
    self.model_class.all(self.authn_header)
  end

end
