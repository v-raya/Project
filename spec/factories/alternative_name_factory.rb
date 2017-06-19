FactoryGirl.define do

  factory :alternative_name, class: AlternativeName do
    sequence(:first) {Faker::Name.first_name}
    sequence(:middle) {Faker::Name.first_name}
    sequence(:last) {Faker::Name.last_name}
  end

end
