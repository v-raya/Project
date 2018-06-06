# frozen_string_literal: true

class Rfa::Tracking < CalsBase
  include Concerns::Rfa::TrackingApiProtocolProvider

  attr_accessor :id, :rfa_1a_id, :license_number, :facility_name, :tracking_documents

  def self.parent_path
    'rfa-1a-forms'
  end

  def self.api_resource_path
    'tracking'
  end
end
