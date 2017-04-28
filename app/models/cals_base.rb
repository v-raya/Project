class CalsBase
  include ActiveModel::Model

  def self.class_name_downcase_pluralized
    name.demodulize.downcase.pluralize
  end
end
