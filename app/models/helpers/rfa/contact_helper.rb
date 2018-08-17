# frozen_string_literal: true

# module which provides access to contacts for controllers
class Helpers::Rfa::ContactHelper < Helpers::ModelHelperBase
  def model_class
    Rfa::Contact
  end

  def create_contact(contact_json)
    Rfa::Contact.create_contact(auth_header, contact_json)
  end

  def update_contact(id, contact_json)
    Rfa::Contact.update_contact(auth_header, id, contact_json)
  end

  def delete_contact(id)
    Rfa::Contact.delete_contact(auth_header, id)
  end
end
