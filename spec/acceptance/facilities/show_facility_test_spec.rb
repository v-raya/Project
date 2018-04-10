# frozen_string_literal: true

require 'rails_helper'
require 'vcr'

RSpec.feature 'Facility Search & Profile', js: true, set_auth_header: true do
  before(:each) do
    allow_any_instance_of(SearchController).to receive(:user_from_session).and_return(FactoryGirl.build(:user))
    allow_any_instance_of(FacilitiesController).to receive(:store_in_session).and_return(true)
    # allow_any_instance_of(FacilitiesController).to receive(:store_facility_response_in_session).and_return(true)
  end

  scenario 'To get list of facilities from search results' do
    facilities_list
  end

  scenario 'To click toggle result and validate facility name in list view' do
    facilities_list
    within(:css, '.toggle_result') do
      page.find(:css, '.line_off-icon.navbar-brand').click
    end
    expect(page).to have_text('Facility Type / Facility Source')
  end

  scenario 'To select county dropdown and show search results' do
    visit search_index_path
    select 'Alameda', from: 'county_select'
    find_button('search').click
    expect(page).to have_content('Facility Phone Number', minimum: 1)
  end

  scenario 'To select facility type dropdown and show search results' do
    visit search_index_path
    select 'Orange', from: 'county_select'
    select 'Adoption Agency', from: 'facility_select'
    find_button('search').click
    expect(page).to have_content('Facility Phone Number', minimum: 1)
  end

  scenario 'To test dropdown for number of facilities per page' do
    facilities_list
    select '20', from: 'dropdownFacilities'
    expect(page).to have_content('Facility Phone Number', minimum: 1)
    expect(find_field('dropdownFacilities').value).to eq '20'
  end

  scenario 'To test reset button' do
    facilities_list
    find_button('reset').click
    expect(page).not_to have_selector('#next_button')
  end

  def facilities_list
    visit search_index_path
    select 'Riverside', from: 'county_select'
    find_button('search').click
  end
end
