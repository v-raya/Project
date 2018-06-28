require 'rspec'
require 'rails_helper'

describe FacilitiesController do
  before do
    allow_any_instance_of(CalsBaseController).to receive(:authenticate_with_cwds).and_return(true)
    allow_any_instance_of(CalsBaseController).to receive(:get_session_token).and_return(ENV['TOKEN'])
  end

  describe 'GET show' do
    it 'renders the show template without requiring to check priviliges' do
      allow(controller).to receive(:check_for_priviliges).and_return([{"name"=>"CALS (Facilities)", "id"=>"facility_search", "enabled"=>true, "roles"=>[], "privileges"=>[["Resource Management", "Facility-search-rollout"], ["CWS Case Management System", "Facility-search-rollout"], ["CWS Case Management System", "Resource Management", "Facility-search-rollout"]], "summary"=>"Search for Facility\n", "href"=>"/search"}, {"name"=>"CALS (RFA)", "id"=>"cals_rfa", "enabled"=>true, "roles"=>[], "privileges"=>[["RFA-rollout"]], "summary"=>"RFA\n", "href"=>"/"}])
      get :show, params: { id: 'LUfrsLBAWW' }
      expect(response).to render_template('show')
    end
    it 'does not render the show template with requiring to check priviliges' do
      allow(controller).to receive(:check_for_priviliges).and_return([])
      get :show, params: { id: 'LUfrsLBAWW' }
      expect(response).to render_template('errors/forbidden_page')
    end
  end

  describe 'POST search' do
    it 'renders search' do
      request.headers['Content-Type'] = 'application/json'
      request.headers['Accept'] = 'application/json'

      post :search, body: {name: {query_type: 'match', value: ['xy']} }.to_json

      expect(response.status).to eq(200)
      expect(response.body.include?('TWEEDLE'))
    end
  end
end
