require 'rspec'
require 'rails_helper'

include RSpec

static_token = '..akOzGDwe1ilFwWe8.LLCnrWDGHmueeeQGMb8BhZfV_ZvvIeqx93ktjS2wmeePLq_SE7CUHnlgX4y0KM1kGLUA2N1SLOmqjwlJCaLrv3N0mRaWHOWs4dXq7tysNzeUocg4-AcT14OTROfgr2ArLRJ-6KhGtE_XSgVA3k80vwgznKJvrePDvf8Rf-TAAH6aDC1r49CsmEJvXBg-M4bKWsAsKXJd4vjGO9ne1QS372R1xufNt6Z-QzySxp-tpwHvlMn95scPuFlpF6-g4E8qdFLS37PpYQEi57PYHThd99ycb-Eqlp21_aGvHdaabE8mrywR45kyhftFqT4pMb5f7kh-6-MCSZq0l_qC3tefgxBiuJKf7KSMi_F6OXS-ZBNGUNX3nTPUUw6L9uJ_fCdm6L_zRrLQg9aVmTPbP-eY2P6jwyNx6legZY7GctD3G3vfwYzK-NYTMpIiqMBR-68dCvuwaizR7valkGMhXl32IGIITX39a5Qcl0ityekdN2ThkwvYxXADq-TNV8j8JUWSsmKzwJlNwbIbXtcxnGrT7x79TR4lmKhEZm1z8ufpI4jf3qpyNoxBu1AaMn8czQmvQdgYGrjJd3BRhhfNbLQ9mk8-tTz15Nm_hUATVkykcQb0HdLiyvN12_vL8Y1GK-bVHsblvWfgPcNefSCAOO-M.UFTRcPo0_1rA4er_fHW5DA'

describe WelcomeController do
  before(:each) do
    allow(controller).to receive_messages(:authenticate_with_cwds => true)
    allow(controller).to receive_messages(:get_session_token => static_token)
  end

  describe 'GET index' do
    it 'renders index' do
      get :index
      expect(response).to render_template('index')
    end
  end
end
