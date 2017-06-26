class Dictionaries::EthnicityType < DictionaryBase
  include Concerns::BaseCalsApiProtocolProvider

  attr_accessor :id, :value

  def self.class_name_downcase_pluralized
    'dictionaries/ethnicity-types'
  end

end
