# frozen_string_literal: true

FactoryBot.define do
  factory :user, class: 'User' do
    #:user, :staffId, :roles, :county_code, :county_name, :privilege
    sequence(:user) { 'RACFID' }
    sequence(:staffId) { '19' }
    sequence(:roles) { ['Supervisor'] }
    sequence(:county_code) { '20' }
    sequence(:county_name) { 'Los Angeles' }
    sequence(:privileges)  { ['CWS Case Management System', 'Resource Management', 'Facility-search-rollout', 'RFA-rollout'] }
  end
end
