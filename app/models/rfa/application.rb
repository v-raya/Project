class RFA::Application < CalsBase
  include Concerns::RFA::ApplicationApiProtocolProvider
  attr_accessor :id, :application_type, :county, :progress_state


  def initialize(id=nil)
    @id = id
  end
  # has_many :applicants
  # has_many :signatories
  # has_many :references
  # has_one :child_preference
  # has_many :identified_desired_children
  # has_one :applicant_household_address
end
