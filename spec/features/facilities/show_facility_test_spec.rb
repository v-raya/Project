# frozen_string_literal: true

require 'rails_helper'
require 'vcr'

RSpec.feature 'Facility Search & Profile', js: true, set_auth_header: true do
  before(:each) do
    allow_any_instance_of(CalsBaseController).to receive(:check_for_priviliges).and_return(['Something Privilige'])
  end

  def facilities_list
    visit search_index_path
    select 'Riverside', from: 'county_select'
    find_button('search').click
  end

  scenario 'To check facility name in facility after clicking facility name from list of facility search results' do
    facilities_list
    click_link('Guadalupe, Swan')
    expect(page).to have_text('Guadalupe, Swan')
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

  scenario 'To test pagination' do
    visit search_index_path
    select 'Los Angeles', from: 'county_select'
    find_button('search').click
    within(:css, '.search-toggle') do
      select '10', from: 'noOfFacilities'
      expect(find_field('noOfFacilities').value).to eq '10'
    end
    expect(page).to have_content('Facility Phone Number', minimum: 1)
    expect(page).to have_css(:span, text: '1')
    within(:css, '.search-toggle') do
      find(:css, '#nextButton').click
      expect(page).to have_text('2')
      find(:css, '#previousButton').click
      expect(page).to have_text('1')
    end
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
end
