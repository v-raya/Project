class Helpers::ChildPreference < Helpers::ModelHelperBase

  def model_class
    ChildPreference
  end

  def age_group_preferences
    ChildPreference.age_group_preferences(auth_header)
  end

  def sibling_groups
    ChildPreference.sibling_groups(auth_header)
  end

end
