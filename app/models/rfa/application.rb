class RFA::Application < CalsBase
  include Concerns::RFA::ApplicationApiProtocolProvider
  attr_accessor :application_type, :county, :progress_state

  # has_many :applicants
  # has_many :signatories
  # has_many :references
  # has_one :child_preference
  # has_many :identified_desired_children
  # has_one :applicant_household_address
end
