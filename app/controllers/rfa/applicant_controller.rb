class Rfa::ApplicantController < CalsBaseController

  def create
    post_data = request.body.read

    rfa_applicant = rfa_applicant_helper.create(params[:a01_id], post_data)
  end

  def rfa_applicant_helper
    Helpers::Rfa::ApplicantHelper.new(auth_header: get_session_token)
  end
end
