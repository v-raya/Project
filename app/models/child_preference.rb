class ChildPreference < CalsBase

  attr_accessor :sibling_group_size, :age_group_preference

  # has_many :age_group_preferences
  # has_many :sibling_groups

  SIBLING_GROUP_SIZES = { 1 => '1 child only',
    2 => '2',
    3 => '3',
    4 => '4',
    5 => '5+' }.freeze

    AGE_PREFERENCE_OPTIONS = {0 => 'No Preference',
      1 => '0 - 3 years',
      2 => '4 - 8 years',
      3 => '9 - 12 years',
      4 => '13 - 15 years',
      5 => '16 - 18 years',
      6 => '18 - 21 years'}.freeze
end
