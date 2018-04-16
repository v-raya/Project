# frozen_string_literal: true

module Content
    # path connecting to content.yml
  class ContentStore
    @path = 'config/content.yml'
    @content = false

    def self.path
      @path
    end

    def self.path=(path)
      @path = path
    end

    def self.content
      return YAML.load_file(path) if ENV.fetch('RAILS_ENV') == 'development'
      @content ||= begin
        YAML.load_file(@path)
      end
    end
  end
end

