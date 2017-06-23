FactoryGirl.define do

factory :household_adult, class: 'RFA::HouseholdAdult' do
        #    sequence(:relationship_type) #TODO: what to put here
      sequence(:date_of_birth) {Faker::Date.birthday}
    #   sequence(:gender) #TODO: what to put here
     sequence(:legal_first) {Faker::Name.first_name}
     sequence(:legal_middle) {Faker::Name.first_name}
     sequence(:legal_last) {Faker::Name.last_name}



end
end
