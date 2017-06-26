class Address
  include Concerns::AddressApiProtocolProvider
  attr_accessor :street, :zip, :city, :state, :type
end
