class Child < CalsBase
  include ChildApiProtocolProvider

  attr_accessor :id, :name
end
