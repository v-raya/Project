class RFA::Applicant < CalsBase
  include Concerns::RFA::ApplicantApiProtocolProvider

  attr_accessor :language, :education_level, :date_of_birth, :race, :gender,
   :dl_number,:dl_state, :email_address, :exclusion_order,
                 :legal_first, :legal_middle, :legal_last
#TODO: what is an exclusion_order
#belongs_to :rfa_application

  # has_one :occupation
  # has_one :desired_child
  # has_one :identified_desired_child
  #
  # has_many :licenses
  # has_many :phones
  # has_many :applicant_children
  # has_many :household_adults
  # has_many :relationships
  # has_many :alternative_names

  # include legal name as part of the applicant object
  # use names for (maiden, preferred, etc)

  # has_one spouse

  # desired children should move to application

  # has many license_history
end
