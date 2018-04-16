# frozen_string_literal: true

module Content
  # method filter_content with user logged in object as argument, filter_by_roles_and_privileges method calls permitted? method
  class ContentService
    def initialize(content = ContentStore.content, permission_filter = ContentPermissionFilter.new)
      @content = content
      @permission_filter = permission_filter
    end

    def filter_content(profile)
      enabled_content = filter_disabled_content
      filter_by_roles_and_privileges(enabled_content, profile)
    end

    private

    def filter_disabled_content
      {
        services: @content['services']
          .select { |r| r['enabled'] }
      }
    end

    def filter_by_roles_and_privileges(content, profile)
      {
        services: content[:services]
          .select { |service| @permission_filter.permitted?(service, profile) }
      }
    end
  end
end
