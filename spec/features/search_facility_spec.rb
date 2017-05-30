require 'rails_helper'
require 'vcr'

RSpec.feature 'Search', js: true do
  before(:each) do
    CalsBaseController.any_instance.stub(:authenticate_with_cwds).and_return(true)
  end

  scenario 'Search a facility' do
    visit '/search'
    fill_in 'Enter Facility Address', with: 'TOONTOWN'
    find_button('submit').click
    expect(page).to have_text('TOONTOWN')
  end
end
