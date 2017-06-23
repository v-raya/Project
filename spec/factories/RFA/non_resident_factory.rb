FactoryGirl.define do
  factory :non_resident, class: 'RFA::NonResident' do
    sequence(:legal_first) {Faker::Name.first_name}
    sequence(:legal_middle) {Faker::Name.first_name}
    sequence(:legal_last) {Faker::Name.last_name}
  end
end
