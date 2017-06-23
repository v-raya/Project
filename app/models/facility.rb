class Facility < CalsBase
  include Concerns::FacilityApiProtocolProvider

  attr_accessor :fac_name, :fac_nbr, :type, :fac_licensee_name, :fac_mail_street_addr, :fac_addr
  attr_accessor :fac_mail_city, :fac_mail_state, :fac_mail_zip_code, :fac_res_street_addr
  attr_accessor :fac_res_city, :fac_res_state, :fac_res_zip_code, :county, :facility_telephone
  attr_accessor :district_office, :status, :assigned_worker, :fac_licensee_type, :fac_lic_eff_date
  attr_accessor :fac_last_visit_date, :last_visit_reason, :fac_email_address, :fac_capacity, :fac_orig_appl_rec_date

  # once the real api is created  and we switch from mock api we will switch to these values for attr_accessors
  # attr_accessor :id, :type, :name, :licensee_name, :assigned_worker, :district_office
  # attr_accessor :license_type, :license_number, :license_status, :capacity
  # attr_accessor :license_effective_date, :original_application_recieved_date

  # has_many children association
  # attr_accessor :children
  # def get_children
  #   self.children = Child.find_by_facility(fac_nbr)
  # end

  # has_many children association
  def children
    Child.find_by_facility(fac_nbr)
  end

  # has_many complaints association
  def complaints
    Complaint.find_by_facility(fac_nbr)
  end

end
