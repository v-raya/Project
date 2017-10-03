class Helpers::GeoserviceHelper < Helpers::ModelHelperBase

  def model_class
    Geoservice
  end

  def suggest(params)
    Geoservice.suggest(params, auth_header)
  end

  def lookup
    Geoservice.lookup(auth_header)
  end
  def validate
    Geoservice.validate(auth_header)
  end

end
