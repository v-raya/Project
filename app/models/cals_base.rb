class CalsBase
  include ActiveModel::Model

  def self.class_name_downcase_pluralized
    name.demodulize.downcase.pluralize
  end

  def self.api_resource_path
    name.demodulize.downcase.pluralize
  end

  def self.parent_path
    ''
  end
end
