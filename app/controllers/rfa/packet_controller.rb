class Rfa::PacketController < CalsBaseController

def index
  @application_id = params[:a01_id]
  @rfa_01a
 #@rfa_01b_forms
 #@rfa_01c_forms
 #@lic198b_forms
end

  def rfa_application_packet_helper
    Helpers::Rfa::ApplicationPacketHelper.new(auth_header: get_session_token)
  end

  def dictionaries_helper
    Helpers::Dictionary.new(auth_header: get_session_token)
  end

end
