class Helpers::FacilityHelper < Helpers::ModelHelperBase


  def model_class
    Facility
  end


def search(query)
    Facility.search(query, self.authn_header)
  end
end
