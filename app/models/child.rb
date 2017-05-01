class Child < CalsBase
  include ChildApiProtocolProvider

  attr_accessor :name, :id
end
