class Rfa::Application < CalsBase
  include Concerns::Rfa::ApplicationApiProtocolProvider
  attr_accessor :id, :application_type, :county, :progress_state

  attr_accessor :applicants, :residence, :minor_children


  def initialize(id=nil)
    @id = id
  end
  # has_many :applicants
  # has_many :signatories
  # has_many :references
  # has_one :child_preference
  # has_many :identified_desired_children
  # has_one :applicant_household_address
  #
  def self.api_resource_path
    'rfa-1a-forms'
  end

end
