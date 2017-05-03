require 'hypernova'

class SearchController < CalsBaseController
  around_action :hypernova_render_support

  def index
    @landingPage_url = SANDBOX_LANDING_URL
  end
end
