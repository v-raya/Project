class Rfa::Applicant < CalsBase
  include Concerns::Rfa::ApplicantApiProtocolProvider

  attr_accessor :language, :education_level, :date_of_birth, :race, :gender,
    :dl_number,:dl_state, :email_address, :exclusion_order,
    :first_name, :middle_name, :last_name


  attr_accessor :id

  attr_accessor :other_names, :phones

  #TODO: what is an exclusion_order
  #belongs_to :rfa_application

  # has_one :occupation
  #
  # has_many :licenses
  # has_many :phones
  # has_many :applicant_children
  # has_many :household_adults
  # has_many :relationships
  # has_many :alternative_names
  # has_one spouse
  # has many license_history

  def other_names=(val)
    @other_names = val.map { |itm| AlternativeName.new(itm) } if val.present?
  end

  def phones=(val)
    @phones = val.map { |itm| Phone.new(itm) } if val.present?
  end

  # methods

  def self.parent_path
    'rfa-1a-forms'
  end

end
