class Helpers::FacilityModelHelper < Helpers::ModelHelperBase
  def model_class
    Facility
  end

  def search(query)
    Facility.search(query, auth_header)
  end
end
