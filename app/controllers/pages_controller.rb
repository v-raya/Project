require 'hypernova'

class PagesController < CalsBaseController
  around_action :hypernova_render_support

  def index
    @liked = true
    @title = 'Server Side Rendering'
  end
end
