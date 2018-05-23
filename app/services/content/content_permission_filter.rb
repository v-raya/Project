# frozen_string_literal: true

module Content
  # Comparing for user logged in privileges & roles with given prviliges in content.yml
  class ContentPermissionFilter
    def permitted?(service, profile)
      roles = service['roles']
      privileges = service['privileges']
      return true if roles.blank? && privileges.blank?

      permitted_by_roles = !(profile.roles & roles).empty?
      permitted_by_privileges = !(profile.privileges & privileges == privileges ? profile.privileges & privileges : []).empty?

      permitted_by_roles || permitted_by_privileges
    end
  end
end
