class RFA::ApplicantHouseholdAddress < Address
  include Concerns::RFA::ApplicantHouseholdAddressApiProtocolProvider
  attr_accessor :property_type, :own_rent_lease,
  :weapons, :body_of_water, :directions

  #has_many :non_residents

  # address additional properties can be moved to separate model,
  # so all addresses can use this model
  # but application household address can have additional properties required by applicaiton
  #
  #
end
