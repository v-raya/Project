class Rfa::ResidenceController < CalsBaseController

  def create
    post_data = request.body.read
    rfa_residence = rfa_residence_helper.create(params[:a01_id], post_data)
  end

  def rfa_residence_helper
    Helpers::Rfa::ApplicationResidence.new(auth_header: session['token'])
  end
end
