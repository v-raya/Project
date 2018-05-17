# frozen_string_literal: true

FactoryGirl.define do
  factory :user, class: 'User' do
    #:user, :staffId, :roles, :county_code, :county_name, :privilege
    sequence(:user) { 'RACFID' }
    sequence(:staffId) { '19' }
    sequence(:roles) { ['Supervisor'] }
    sequence(:county_code) { '20' }
    sequence(:county_name) { 'Los Angeles' }
    sequence(:privileges)  { ['Facility-search-rollout'] }
  end
end
