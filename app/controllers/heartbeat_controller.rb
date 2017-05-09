class HeartbeatController < CalsBaseController
  skip_before_action :authenticate_with_cwds

  def show
  end

end
