# frozen_string_literal: true

require 'rails_helper'
require 'vcr'
require 'faker'

RSpec.feature 'RFA', js: true do

  scenario '01A - validate scrollspy', set_auth_header: true do
    visit root_path
    click_button 'Create RFA Application (Form 01)'
    expect(page).to have_content 'Rfa-01A Section Summary'
    page.find('#Rfa01AOverview').find('a.btn.btn-default').click
    page.execute_script "document.getElementById('applicants-card').scrollIntoView()"
    page.execute_script 'window.scrollBy(0,20)'
    expect(find('a.link.active').text).to eq '1. Applicant Information'
    page.execute_script "document.getElementById('applicant-residence-card').scrollIntoView()"
    page.execute_script 'window.scrollBy(0,20)'
    expect(find('a.link.active').text).to eq '2. Applicant Residence'
    click_button('Add Another Applicant +')
    fill_in('applicants[0].first_name', with: 'testing', match: :prefer_exact)
    page.execute_script "document.getElementById('relationship-between-applicants-card').scrollIntoView()"
    page.execute_script 'window.scrollBy(0,20)'
    expect(find('a.link.active').text).to eq '3. Applicant Relationship'
    page.execute_script "document.getElementById('minor-child-card').scrollIntoView()"
    page.execute_script 'window.scrollBy(0,20)'
    expect(find('a.link.active').text).to eq '4. Minor Children'
    page.execute_script "document.getElementById('other-adults-card').scrollIntoView()"
    page.execute_script 'window.scrollBy(0,20)'
    expect(find('a.link.active').text).to eq '5. Other Adults'
    page.execute_script "document.getElementById('marital-history-card').scrollIntoView()"
    page.execute_script 'window.scrollBy(0,20)'
    expect(find('a.link.active').text).to eq '6. Marital History'
    page.execute_script "document.getElementById('child-desired-card').scrollIntoView()"
    page.execute_script 'window.scrollBy(0,20)'
    expect(find('a.link.active').text).to eq '7. Child Desired'
    page.execute_script "document.getElementById('foster-care-card').scrollIntoView()"
    page.execute_script 'window.scrollBy(0,20)'
    expect(find('a.link.active').text).to eq '8. Foster Care History'
    page.execute_script "document.getElementById('reference-card').scrollIntoView()"
    page.execute_script 'window.scrollBy(0,20)'
    expect(find('a.link.active').text).to eq '9. References'
  end
end
