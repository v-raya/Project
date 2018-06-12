require 'rails_helper'
require 'vcr'
require 'faker'

RSpec.feature 'RFATracking', js: true do
  scenario 'visit tracking page from dashboard', set_auth_header: true do
    visit root_path
    first('.tracking').click_link
    expect(page).to have_content 'rfa_1a_id:'
  end

  scenario 'visit tracking page from dashboard ande save', set_auth_header: true do
    visit root_path
    first('.tracking').click_link
    expect(page).to have_content 'rfa_1a_id:'
    expect(page).to have_button 'Save'
    click_button 'Save'
  end

  scenario 'visit tracking page from dashboard and Edit', set_auth_header: true do
    visit root_path
    first('.tracking').click_link
    expect(page).to have_content 'rfa_1a_id:'
    expect(page).to have_button 'Edit'
    click_button 'Edit'
    expect(page).to have_content 'tracking id:'
  end

end
