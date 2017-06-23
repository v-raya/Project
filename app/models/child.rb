class Child < CalsBase
  include Concerns::ChildApiProtocolProvider

  attr_accessor :id, :name
end
