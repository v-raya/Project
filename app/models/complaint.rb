class Complaint < CalsBase
  include ComplaintApiProtocolProvider

  attr_accessor :id, :code
end
