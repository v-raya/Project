require 'rails_helper'
require 'vcr'
require 'faker'

RSpec.feature 'RFATracking', js: true do
  scenario 'visit tracking page from dashboard', set_auth_header: true do
    visit root_path
    first('.tracking').click_link
    expect(page).to have_content 'tracking id:'
  end

  scenario 'visit tracking page from dashboard ande save', set_auth_header: true do
    visit root_path
    first('.tracking').click_link
    expect(page).to have_content 'tracking id:'
    expect(page).to have_button 'Save'
    click_button 'Save'
  end

end
