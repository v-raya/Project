class RfaController < CalsBaseController
  include Response
  def index
  end

  def residence
  end

  def show
    @name_types = { :name => 'maiden', :other => 'legal' }
  end
  # def residence_ownership_types
  #   json_response(get_dictionaries 'residence-ownership-types')
  # end

  [:residence_ownership_types, :languages, :name_types, :phone_number_types].each do |method_name|
    send :define_method, method_name do
      json_response(get_dictionaries method_name.to_s.dasherize)
    end
  end

  private
  def get_dictionaries type
    response = FaradayBase.get("#{BASE_TPT_URL}/dictionaries/#{type}", '')
    JSON.parse(response.body)
  end
end
