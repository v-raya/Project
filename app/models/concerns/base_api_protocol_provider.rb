module BaseApiProtocolProvider
  extend ActiveSupport::Concern

  # class methods
  class_methods do
    def all
      response = Faraday.get ENV['BASE_CALS_API_URL'] + '/' + class_name_downcase_pluralized
  
      JSON.parse(response.body).map { |itm| new(itm) }
    end

    def find_by_id(id)
      response = Faraday.get "#{ENV['BASE_CALS_API_URL']}/#{class_name_downcase_pluralized}/#{id}"
      new(JSON.parse(response.body))
    end
  end

  # instance methods
  included do
    def update(_attrs = {})
      'update'
    end

    def destroy
      'destroy'
    end
  end
end
