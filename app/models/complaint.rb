class Complaint < CalsBase
  include Concerns::ComplaintApiProtocolProvider

  attr_accessor :id, :code
end
