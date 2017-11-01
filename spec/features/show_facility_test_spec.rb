require 'rails_helper'
require 'vcr'

RSpec.feature 'Facilities', js: true do
  before(:each) do
    allow_any_instance_of(CalsBaseController).to receive(:authenticate_with_cwds).and_return(true)
    allow_any_instance_of(CalsBaseController).to receive(:get_session_token).and_return(ENV['TOKEN'])
  end

  scenario 'List of facilities from search results' do
    facilities_list
  end

  scenario 'click facility from list of facilities search results' do
    facilities_list
    click_link('Lederhouse Transitions')
    expect(page).to have_text('Lederhouse Transitions')
  end

  scenario 'refresh facility' do
    facilities_list
    click_link('Lederhouse Transitions')
    page.evaluate_script('window.location.reload()')
    expect(page).to have_text('Lederhouse Transitions')
  end

  scenario 'click into facility and show complaints' do
    facilities_list
    click_link('Lederhouse Transitions')
    expect(page).to have_text('Approved')
  end

  def facilities_list
    visit search_index_path
    fill_in 'Enter Facility Name', with: 'Lederhouse Transitions'
    find_button('search').click
    expect(page).to have_text('Lederhouse Transitions')
  end
end
