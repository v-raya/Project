# frozen_string_literal: true

require 'rails_helper'
require 'vcr'
require 'faker'

RSpec.feature 'RFA', js: true do

  scenario 'Dashboard page', set_auth_header: true do
    visit root_path
    expect(page).to have_button('Create RFA Application')
  end

  scenario 'validate applicant card', set_auth_header: true do
    visit root_path
    click_button 'Create RFA Application'
    expect(page).to have_content 'Rfa-01A Section Summary'
  end

  scenario 'validate scrollspy', set_auth_header: true do
    visit root_path
    click_button 'Create RFA Application'
    expect(page).to have_content 'Rfa-01A Section Summary'
    page.find('#Rfa01AOverview').find('a.btn.btn-default').click
  end
end
