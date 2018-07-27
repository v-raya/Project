# frozen_string_literal: true

require 'rails_helper'
require 'vcr'
require 'faker'

RSpec.feature 'RFA02', js: true, inaccessible: true do

  before(:each) do
  visit root_path
  page.driver.browser.manage.window.resize_to 1200, 800

  click_button 'Create RFA Application'
  fill_in('applicants[0].first_name', with: 'James', match: :prefer_exact)
  fill_in('applicants[0].last_name', with: 	'123Monteo', match: :prefer_exact)
  click_button 'Save Progress'
  fill_in('relationship_to_applicants0adult0relationship_to_applicant_freeform', with: 'Friend')
  find('label[for="other_adults[0].is_residing_in_hometrue"]').click
  fill_in('other_adults[0].first_name', with: Faker::Name.first_name, match: :prefer_exact)
  click_button 'Save Progress'
  click_link 'RFA Application list'
  expect(page).to have_content("123Monteo, James")
  end

  scenario 'visit RFA02 page from Tracking', set_auth_header: true do
    visit root_path
    click_button 'Create RFA Application'
    fill_in('applicants[0].first_name', with: "Coltoni", match: :prefer_exact)
    fill_in('applicants[0].last_name', with: "0Carter", match: :prefer_exact)
    click_button 'Save Progress'
    fill_in('relationship_to_applicants0adult0relationship_to_applicant_freeform', with: 'Friend')
    find('label[for="other_adults[0].is_residing_in_hometrue"]').click
    fill_in('other_adults[0].first_name', with: Faker::Name.first_name, match: :prefer_exact)
    click_button 'Save Progress'
    click_link 'RFA Application list'
    expect(page).to have_content("0Carter, Coltoni")
    page.find("a", :text =>"0Carter, Coltoni", match: :first).find(:xpath,"..//..", match: :first).find("a", text: 'tracking').click
    page.find("a", :text => 'Criminal Background Checklist (RFA-02)', match: :first).find(:xpath,"..//..", match: :first).find("a", text: 'Criminal Background Checklist (RFA-02)').click
    expect(page).to have_content 'RFA Application'
  end

  scenario 'visit RFA02 page from Tracking and validate edit ', set_auth_header: true do
    visit root_path
    page.find("a", :text =>"123Monteo, James", match: :first).find(:xpath,"..//..", match: :first).find("a", text: 'tracking').click
    page.find("a", :text => 'Criminal Background Checklist (RFA-02)', match: :first).find(:xpath,"..//..", match: :first).find("a", text: 'Criminal Background Checklist (RFA-02)').click
    expect(page).to have_button 'Edit Checklist'
    click_button 'Edit Checklist'
    expect(page).to have_button 'Save'
    expect(page).to have_button 'Cancel'
  end

  scenario 'visit RFA02 page from Tracking and validate edit and save', set_auth_header: true do
    visit root_path
    page.find("a", :text =>"123Monteo, James", match: :first).find(:xpath,"..//..", match: :first).find("a", text: 'tracking').click
    page.find("a", :text => 'Criminal Background Checklist (RFA-02)', match: :first).find(:xpath,"..//..", match: :first).find("a", text: 'Criminal Background Checklist (RFA-02)').click
    expect(page).to have_button 'Edit Checklist'
    click_button 'Edit Checklist'
    expect(page).to have_button 'Save'
    expect(page).to have_button 'Cancel'
    fill_in('liveScan0textAreaEdit0', with: 'Hello!', match: :prefer_exact)
    click_button 'Save'
    expect(page).to have_button 'Edit Checklist'
    expect(page).to have_content('Hello!')
  end

  scenario 'visit RFA02 page from Tracking and validate cancel', set_auth_header: true do
    visit root_path
    page.find("a", :text =>"123Monteo, James", match: :first).find(:xpath,"..//..", match: :first).find("a", text: 'tracking').click
    page.find("a", :text => 'Criminal Background Checklist (RFA-02)', match: :first).find(:xpath,"..//..", match: :first).find("a", text: 'Criminal Background Checklist (RFA-02)').click
    expect(page).to have_button 'Edit Checklist'
    click_button 'Edit Checklist'
    fill_in('liveScan0textAreaEdit0', with: 'Hello!', match: :prefer_exact)
    expect(page).to have_button 'Save'
    click_button 'Save'
    expect(page).to have_button 'Edit Checklist'
    click_button 'Edit Checklist'
    fill_in('liveScan0textAreaEdit0', with: '121', match: :prefer_exact)
    expect(page).not_to have_content('Hello!')
    expect(page).to have_button 'Cancel'
    click_button 'Cancel'
    expect(page).to have_button 'Edit Checklist'
    expect(page).to have_content('Hello!')
  end

  scenario 'visit RFA02 page from Tracking and and handle api error', set_auth_header: true do
    visit root_path
    expect(page).to have_content("123Monteo, James")
    page.find("a", :text =>"123Monteo, James", match: :first).find(:xpath,"..//..", match: :first).find("a", text: 'tracking').click
    page.find("a", :text => 'Criminal Background Checklist (RFA-02)', match: :first).find(:xpath,"..//..", match: :first).find("a", text: 'Criminal Background Checklist (RFA-02)').click
    expect(page).to have_button 'Edit Checklist'
    click_button 'Edit Checklist'
    expect(page).to have_button 'Save'
    expect(page).to have_button 'Cancel'
    fill_in('liveScan0submitDateEdit0', with: '32', match: :prefer_exact)
    click_button 'Save'

  end

end
