class Helpers::Rfa::AdoptionHistoryHelper  < Helpers::ModelHelperBase

  def model_class
    Rfa::AdoptionHistory
  end
def self.parent_path
  'rfa-1a-forms'
 end

 def self.api_resource_path
   'adoption-history'
 end

end
