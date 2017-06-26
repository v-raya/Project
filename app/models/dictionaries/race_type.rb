class Dictionaries::RaceType < DictionaryBase
  include Concerns::BaseCalsApiProtocolProvider

  attr_accessor :id, :value

  def self.class_name_downcase_pluralized
    'dictionaries/race-types'
  end

end
