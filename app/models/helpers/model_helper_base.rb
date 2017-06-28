class Helpers::ModelHelperBase
  include ActiveModel::Model

  attr_accessor :model_class
  attr_accessor :auth_header

  def initialize(args = {})
    self.auth_header = args[:auth_header]
  end

  def find_by_id(id)
    model_class.find_by_id(id, auth_header)
  end

  def all
    model_class.all(auth_header)
  end

  def create(body)
    byebug
    model_class.create(auth_header, body)
  end
end
