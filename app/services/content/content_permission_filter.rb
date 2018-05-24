# frozen_string_literal: true

module Content
  # Comparing for user logged in privileges & roles with given prviliges in content.yml
  class ContentPermissionFilter
    def permitted?(service, profile)
      roles = service['roles']
      privileges = service['privileges']
      return true if roles.blank? && privileges.blank?

      permitted_by_roles = !(profile.roles & roles).empty?

      permitted_by_privileges = privileges.any? { |i| i.sort & profile.privileges.sort == i.sort }

      permitted_by_roles || permitted_by_privileges
    end
  end
end
