FactoryGirl.define do

factory :application, class: 'RFA::Application' do
#  sequence(:application_type) {} #TODO: what to put here
  sequence(:county) {Faker::Address.county}
#    sequence(:progress_state) {} #TODO: what to put here


  # has_many :applicants
  # has_many :signatories
  # has_many :references
  # has_one :child_preference
  # has_many :identified_desired_children
  # has_one :applicant_household_address
end
end
