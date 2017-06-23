FactoryGirl.define do
  factory :applicant_household_address, class: 'RFA::ApplicantHouseholdAddress'  do
    #sequence(:property_type) #TODO whats this
  #  sequence(:own_rent_lease)
    sequence(:weapons){Faker::Boolean.boolean}
    sequence(:body_of_water){Faker::Boolean.boolean}
    sequence(:directions){Faker::Lorem.paragraph}
end
    #has_many :non_residents
  end
