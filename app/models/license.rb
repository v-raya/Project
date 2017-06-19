class License < CalsBase
  attr_accessor :agency_name, :license_type, :license_history_type

  #license_types = {revoked,denied, employed,volunteered, operator, adoption, certification }
  #TODO: ask about how many kinds/types of licenses there are
end
