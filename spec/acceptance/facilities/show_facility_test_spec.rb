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

  scenario 'To check facility name in facility after clicking facility name from list of facility search results' do
    facilities_list
    click_link('Guadalupe, Swan')
    expect(page).to have_text('Guadalupe, Swan')
  end

  scenario 'To click toggle result and validate facility name in list view' do
    facilities_list
    within(:css, '.toggle_result') do
      page.find(:css, '.line_off-icon.navbar-brand').click
    end
    expect(page).to have_text('Facility Type / Facility Source')
  end

  scenario 'To check faclilty list after refresh' do
    facilities_list
    click_link('Guadalupe, Swan')
    page.evaluate_script('window.location.reload()')
    expect(page).to have_content('FACILITY TYPE :', minimum: 1)
  end

  scenario 'To click into facility and validate Complaints' do
    visit search_index_path
    select 'Riverside', from: 'county_select'
    fill_in 'Enter Facility ID #', with: '100000299'
    find_button('search').click
    click_link('Little Dreams Home')
    expect(page).to have_text('Complaint History')
  end

  scenario 'To click into facility and validate Children' do
    visit search_index_path
    fill_in 'Enter Facility ID #', with: '250000004'
    select 'Alpine', from: 'county_select'
    find_button('search').click
    click_link('Peace Blossoms Home')
    expect(page).to have_text('Children currently placed in facility')
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

  scenario 'To find facilties by entering facility ID' do
    visit search_index_path
    select 'Los Angeles', from: 'county_select'
    fill_in 'Enter Facility ID #', with: '100000538'
    find_button('search').click
    expect(page).to have_content('Facility Phone Number', minimum: 1)
  end

  scenario 'find facilties by entering facility ID with alpha characters' do
    visit search_index_path
    select 'Sacramento', from: 'county_select'
    fill_in 'Enter Facility ID #', with: 'GmbHwyg0NM'
    find_button('search').click
    expect(page).to have_content('Facility Phone Number', minimum: 1)
  end

  scenario 'To test pagination' do
    visit search_index_path
    select 'Los Angeles', from: 'county_select'
    find_button('search').click
    expect(find_field('dropdownFacilities').value).to eq '10'
    expect(page).to have_css(:span, text: '1')
    expect(page).to have_css(:span, text: '348')
    find(:css, '#next_button').click
    expect(page).to have_text('2')
    expect(page).to have_content('Facility Phone Number', minimum: 1)
    find(:css, '#previous_button').click
    expect(page).to have_text('1')
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
