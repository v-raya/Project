FactoryGirl.define do
  factory :facility, class: Facility do
    sequence(:fac_name) { Faker::Lorem.sentence(1, true, 2) }
    sequence(:fac_nbr) { Faker::Number.number(2) }
  end

  factory :facilities, class: Facility do
    facilities { create_list(:facility, 50) }
  end
end
