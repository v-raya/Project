require 'rails_helper'
require 'vcr'

RSpec.feature 'Facilities', js: true, set_auth_header: true  do
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

  scenario 'click into facility and show children' do
    facilities_list
    click_link('Lederhouse Transitions')
    expect(page).to have_text('Takahashi')
  end

  scenario 'select county dropdown and show search results' do
    visit search_index_path
    select 'Alameda', from: 'county_select'
    find_button('search').click
    expect(page).to have_text('DONALD DUCK ARF')
  end

  scenario 'select facility type dropdown and show search results' do
    visit search_index_path
    select "Orange", :from => "county_select"
    select 'Adoption Agency', from: 'facility_select'
    find_button('search').click
    expect(page).to have_text('Open Door Adoption')
  end

  scenario 'find facilties by entering facility ID' do
    visit search_index_path
    select "Los Angeles", :from => "county_select"
    fill_in 'Enter Facility ID #', with: '198798943'
    find_button('search').click
    expect(page).to have_text('Altadena Youth Shelter')
  end

  scenario 'find facilties by entering facility ID with alpha characters' do
    visit search_index_path
    select "Sacramento", :from => "county_select"
    fill_in 'Enter Facility ID #', with: 'DL7oFNL0AB'
    find_button('search').click
    expect(page).to have_text('Sandy Beach Foster Care Home')
  end

  def facilities_list
    visit search_index_path
    fill_in 'Enter Facility Name', with: 'Lederhouse Transitions'
    find_button('search').click
    expect(page).to have_text('Lederhouse Transitions')
  end
end
