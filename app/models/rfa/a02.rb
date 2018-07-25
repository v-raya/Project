# frozen_string_literal: true

class Rfa::A02 < CalsBase
  include Concerns::Rfa::A02ApiProtocolProvider

  attr_accessor :id, :tracking_id, :county_or_agency, :people

  def self.parent_path
    'trackings'
  end

  def self.api_resource_path
    'rfa-02'
  end
end
