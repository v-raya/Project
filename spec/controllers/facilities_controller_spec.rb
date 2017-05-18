require 'rspec'
require 'rails_helper'

include RSpec

describe FacilitiesController do
  before(:each) do
    allow(controller).to receive_messages(:authenticate_with_cwds => true)
  end

  describe "GET index" do
    it "assigns @facilities" do
      get :index
      expect(assigns(:facilities).size).to eq(38547)
    end

    it "renders the index template" do
      get :index
      expect(response).to render_template("index")
    end
  end

  describe "GET search" do
    it "renders search" do
      get :search, {:params => {query:"01,,,hood"}}
      expect(response.status).to  eq(200)
      expect(response.body.include?("ROBIN HOOD SFH"))
    end
  end

end
