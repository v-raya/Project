require 'rails_helper'
require 'vcr'

RSpec.feature 'Search', js: true do
  before(:each) do
    allow_any_instance_of(CalsBaseController).to receive(:authenticate_with_cwds).and_return(true)
  end

  scenario 'Search a facility' do
    visit '/search'

    fill_in 'Enter Facility Address', with: 'TOONTOWN'
    find_button('search').click
    expect(page).to have_text('TOONTOWN')
  end
end
