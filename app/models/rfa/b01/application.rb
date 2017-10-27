class Rfa::B01::Application < CalsBase
  include Concerns::Rfa::B01::ApplicationB01ApiProtocolProvider
  attr_accessor :id

  def self.api_resource_path
    'rfa-1b-forms'
  end

end
