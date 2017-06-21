require 'rails_helper'
require 'vcr'

RSpec.feature 'Facilities', js: true do
  before(:each) do
    allow_any_instance_of(CalsBaseController).to receive(:authenticate_with_cwds).and_return(true)
  end
  scenario 'List of facilities' do
    visit facilities_path

    expect(page).to have_text('MARCH, AMY CFH')
  end
  scenario 'click into facility show from list of facilities' do
    visit facilities_path

    click_link('MARCH, AMY CFH')
    expect(page).to have_text('MARCH, AMY CFH')
  end

  scenario 'refresh facility' do
    visit facilities_path

    click_link('MARCH, AMY CFH')
    expect(page).to have_text('MARCH, AMY CFH')
    page.evaluate_script('window.location.reload()')
    expect(page).to have_text('MARCH, AMY CFH')
  end
end
