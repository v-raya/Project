# frozen_string_literal: true

# contact entity representation
class Rfa::Contact < CalsBase
  include Concerns::Rfa::ContactApiProtocolProvider

  attr_accessor :id, :date, :classification, :contact_method, :in_person_contact_data, :title, :notes

  def self.parent_path
    'rfa-1a-forms'
  end

  def self.api_resource_path
    'contacts'
  end
end
