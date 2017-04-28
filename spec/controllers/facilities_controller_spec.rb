require 'rspec'
require 'rails_helper'

include RSpec

describe FacilitiesController do

  describe "GET index" do
    it "assigns @facilities" do
      get :index
      expect(assigns(:facilities).size).to eq(53)
    end

    it "renders the index template" do
      get :index
      expect(response).to render_template("index")
    end
  end
end
