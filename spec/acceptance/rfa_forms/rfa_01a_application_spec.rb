# frozen_string_literal: true

require 'rails_helper'
require 'vcr'
require 'faker'

RSpec.feature 'RFA01A', js: true do

  before(:each) do 
    visit root_path
	end
	scenario 'Dashboard page', set_auth_header: true do
	    expect(page).to have_button('Create RFA Application (Form 01)')
  	end

  scenario 'validate applicant card', set_auth_header: true do
    visit root_path
    click_button 'Create RFA Application (Form 01)'
    expect(page).to have_content 'Rfa-01A Section Summary'
  end

  scenario 'validate full applicant card', set_auth_header: true do
    visit root_path
    click_button 'Create RFA Application (Form 01)'
    expect(page).to have_content 'Rfa-01A Section Summary'
    page.find('#Rfa01AOverview').find('a.btn.btn-default').click
    expect(page).to have_content 'Applicant 1 - Information'
    expect(page).to have_button('Save Progress', disabled: true)
    fill_in('applicants[0].first_name', with: Faker::Name.first_name, match: :prefer_exact)
    fill_in('applicants[0].middle_name', with: 'k', match: :prefer_exact)
    expect(page).to have_button('Save Progress', disabled: true)
    fill_in('applicants[0].last_name', with: Faker::Name.last_name, match: :prefer_exact)
    expect(page).to have_button('Save Progress', disabled: false)
    fill_in 'applicants[0].driver_license_number', with: 'ABC123'
    # fill_in('first_name', with: Faker::Name.first_name, :match => :prefer_exact)
    # fill_in('middle_name', with: 'k', :match => :prefer_exact)
    # fill_in('last_name', with: Faker::Name.last_name, :match => :prefer_exact)
    expect(page).to have_content 'More About Applicant'
    select 'Some High School', from: 'highest_education_level'
    select 'Black', from: 'ethnicity'
    select 'Alaska', from: 'applicants[0].driver_license_state'
    fill_in('Email Address', with: 'test@test.com', match: :prefer_exact)
    expect(page).to have_content 'Employment'
    fill_in('Name of the Employer', with: 'Employer Name', match: :prefer_exact)
    fill_in('Occupation', with: 'Front End Developer', match: :prefer_exact)
    fill_in('income', with: '10', match: :prefer_exact)
    fill_in('Residentialstreet_address', with: '2870 Gateway', match: :prefer_exact)
    fill_in('Zip', with: '94403', match: :prefer_exact)
    fill_in('City', with: 'Sacremento', match: :prefer_exact)
    expect(page).to have_content 'Phone Number'
    fill_in 'applicants[0].phones[0].number', with: '201-222-2345'
    click_button('Save Progress')
    visit page.driver.current_url
    expect(find_field('highest_education_level').value).to eq '2'
    expect(find_field('ethnicity').value).to eq '4'
    expect(find_field('applicants[0].driver_license_number').value).to eq 'ABC123'
    expect(find_field('applicants[0].driver_license_state').value).to eq 'AK'
    expect(find_field('employer_name').value).to eq 'Employer Name'
    expect(find_field('occupation').value).to eq 'Front End Developer'
    expect(find_field('income').value).to eq '$10'
    expect(find_field('income_type').value).to eq '1'
    expect(find_field('applicants[0].phones[0].number').value).to eq '(201) 222-2345'
  end

  scenario 'validate remove button, applicant card', set_auth_header: true do
  	click_button 'Create RFA Application (Form 01)'
  	expect(page).to have_content 'Rfa-01A Section Summary'
    page.find('#Rfa01AOverview').find('a.btn.btn-default').click
    expect(page).to have_content 'Applicant 1 - Information'
    fill_in('applicants[0].first_name', with: Faker::Name.first_name, match: :prefer_exact)
    fill_in('applicants[0].middle_name', with: 'k', match: :prefer_exact)
    fill_in('applicants[0].last_name', with: Faker::Name.last_name, match: :prefer_exact)
    click_button 'Add Another Applicant +'
    expect(page).to have_content('Applicant 2 - Information')
    fill_in('applicants[1].first_name', with: Faker::Name.first_name, match: :prefer_exact)
    fill_in('applicants[1].last_name', with: Faker::Name.last_name, match: :prefer_exact)
    applicant_cards = page.all('#applicants-card')
    expect(applicant_cards[2].find('.applicant-list-remove-btn')).to have_content('Remove')
    applicant_cards[2].find('.applicant-list-remove-btn').click
    expect(page).not_to have_content 'Applicant 2 - Information'
    click_button 'Save Progress'
    expect(page).not_to have_content 'Applicant 2 - Information'
  end

  scenario 'validate submit button functionality', set_auth_header: true do
    visit root_path
    click_button 'Create RFA Application (Form 01)'
    expect(page).to have_content 'Rfa-01A Section Summary'
    page.find('#Rfa01AOverview').find('a.btn.btn-default').click
    expect(page).to have_content 'Applicant 1 - Information'
    fill_in('applicants[0].first_name', with: 'Geovanni', match: :prefer_exact)
    expect(page).to have_button('Save Progress', disabled: true)
    expect(page).to have_button('Submit', disabled: true)
    fill_in('applicants[0].last_name', with: 'Moen', match: :prefer_exact)
    expect(page).to have_button('Save Progress', disabled: false)
    expect(page).to have_button('Submit', disabled: true)
    fill_in('applicants[0].date_of_birth', with: '11/11/1111', match: :prefer_exact)
    expect(page).to have_content 'Phone Number'
    fill_in 'applicants[0].phones[0].number', with: '201-222-2345'
    page.find('#residentAddress').fill_in('Residentialstreet_address', with: '2870 something else', match: :prefer_exact)
    page.find('#residentAddress').fill_in('Residentialzip', with: '12345', match: :prefer_exact)
    page.find('#residentAddress').fill_in('Residentialcity', with: 'Sacremento', match: :prefer_exact)
    find('#react-select-3--value').click
    find('#react-select-3--option-1').click
    find('#mailing_similarYes').click
    expect(page).to have_content 'About This Residence'
    select 'Own', from: 'residenceTypes'
    find('#weaponsYes').click
    find('#body_of_water_existYes').click
    find('#others_using_residence_as_mailingYes').click
    page.find(:css, '.languages').click
    page.find(:css, '#react-select-4--option-0').click
    page.find(:css, '.languages').click
    page.find(:css, '#react-select-4--option-1').click
    expect(page).to have_button('Submit', disabled: false)
    expect(page).to have_content 'IV. Minor Children Residing in the Home'
    fill_in('minor_children[0].relationship_to_applicant_freeform', with: 'child', match: :prefer_exact)
    expect(page).to have_button('Submit', disabled: true)
    select 'Geovanni Moen', from: 'applicant_id'
    fill_in('minor_children[0].date_of_birth', with: '11/11/1111', match: :prefer_exact)
    select 'Yes', from: 'child_financially_supported'
    select 'Yes', from: 'child_adopted'
    select 'Male', from: 'minor_gender'
    expect(page).to have_button('Submit', disabled: false)
    fill_in('other_adults[0].relationship_to_applicant_freeform', with: 'child', match: :prefer_exact)
    expect(page).to have_button('Submit', disabled: true)
    select 'Geovanni Moen', from: 'other_adults[0].availableApplicants'
    fill_in('other_adults[0].date_of_birth', with: '12/12/1211', match: :prefer_exact)
    fill_in('other_adults[0].first_name', with: Faker::Name.first_name, match: :prefer_exact)
    expect(page).to have_button('Submit', disabled: true)
    fill_in('other_adults[0].last_name', with: Faker::Name.last_name, match: :prefer_exact)
    expect(page).to have_button('Submit', disabled: false)
    click_button 'Submit'
    # DevNote: this test case will be updated to include more fields as submit
    # functionality is further fleshed out.
  end

  scenario 'show error validation message on full Applicant Card', set_auth_header: true do
    visit root_path
    click_button 'Create RFA Application (Form 01)'
    expect(page).to have_content 'Rfa-01A Section Summary'
    page.find('#Rfa01AOverview').find('a.btn.btn-default').click
    expect(page).to have_content 'Applicant 1 - Information'
    fill_in('applicants[0].first_name', with: 'Geovanni', match: :prefer_exact)
    fill_in('applicants[0].last_name', with: 'Moen', match: :prefer_exact)
    click_button('Add Another Applicant +')
    fill_in('applicants[1].first_name', with: 'Geovanni', match: :prefer_exact)
    fill_in('applicants[1].last_name', with: 'Moen', match: :prefer_exact)
    click_button('Save Progress')
    expect(page).to have_content 'Message: Applicant with first name - [Geovanni], last name - [Moen] and name suffix - [] already exists in application'
  end

  scenario 'remove error validation on full Applicant card', set_auth_header: true do
    visit root_path
    click_button 'Create RFA Application (Form 01)'
    expect(page).to have_content 'Rfa-01A Section Summary'
    page.find('#Rfa01AOverview').find('a.btn.btn-default').click
    expect(page).to have_content 'Applicant 1 - Information'
    applicant_first_name = Faker::Name.first_name
    applicant_last_name = Faker::Name.last_name
    fill_in('applicants[0].first_name', with: applicant_first_name, match: :prefer_exact)
    fill_in('applicants[0].last_name', with: applicant_last_name, match: :prefer_exact)
    click_button('Add Another Applicant +')
    fill_in('applicants[1].first_name', with: applicant_first_name, match: :prefer_exact)
    fill_in('applicants[1].last_name', with: applicant_last_name, match: :prefer_exact)
    click_button('Save Progress')
    # expect(page).to have_content "Message: Applicant with first name - [Geovanni], last name - [Moen] and name suffix - [] already exists in application"
    click_button('Add Another Applicant +')
    fill_in('applicants[1].first_name', with: Faker::Name.first_name, match: :prefer_exact)
    fill_in('applicants[1].last_name', with: Faker::Name.last_name, match: :prefer_exact)
    click_button('Save Progress')
    visit page.driver.current_url
    expect(page).not_to have_content 'Message: Applicant with first name - [Geovanni], last name - [Moen] and name suffix - [] already exists in application'
  end

  # scenario 'remove leading spaces in the names', set_auth_header: true do
  #   visit root_path
  #   click_button 'Create RFA Application (Form 01)'
  #   expect(page).to have_content 'Rfa-01A Section Summary'
  #   page.find('#Rfa01AOverview').find('a.btn.btn-default').click
  #   expect(page).to have_content 'Applicant 1 - Information'
  #   fill_in 'applicants[0].first_name', with: " "
  #   fill_in 'applicants[0].last_name', with: " "
  #   click_button('Save Progress')
  #   expect(find_field('applicants[0].first_name').value).to eq 'first'
  #   expect(find_field('applicants[0].last_name').value).to eq 'last'
  # end

  scenario 'check for disabled save button when applicant names are empty', set_auth_header: true do
    visit root_path
    click_button 'Create RFA Application (Form 01)'
    expect(page).to have_content 'Rfa-01A Section Summary'
    page.find('#Rfa01AOverview').find('a.btn.btn-default').click
    expect(page).to have_content 'Applicant 1 - Information'
    expect(page).to have_button('Save Progress', disabled: true)
    fill_in 'applicants[0].first_name', with: '  '
    fill_in 'applicants[0].last_name', with: '  '
    expect(page).to have_button('Save Progress', disabled: true)
  end

  scenario 'prevent backspace navigation on IE', set_auth_header: true do
    visit root_path
    click_button 'Create RFA Application (Form 01)'
    expect(page).to have_content 'Rfa-01A Section Summary'
    page.find('#Rfa01AOverview').find('a.btn.btn-default').click
    expect(page).to have_content 'Applicant 1 - Information'
    select 'Mr.', from: 'name_prefix', match: :first
    page.first('select#name_prefix').send_keys :backspace
    expect(page).to have_content 'Applicant 1 - Information'
    fill_in 'applicants[0].phones[0].number', with: "\t"
    page.first('select#phone_type').send_keys :backspace
    expect(page).to have_content 'Applicant 1 - Information'
    find('#addAnotherNumber').send_keys :tab
    find('#addAnotherApplicant').send_keys :backspace
    expect(page).to have_content 'Applicant 1 - Information'
  end

  scenario 'validate dropdown focus select on Phone Card', set_auth_header: true do
    visit root_path
    click_button 'Create RFA Application (Form 01)'
    expect(page).to have_content 'Rfa-01A Section Summary'
    page.find('#Rfa01AOverview').find('a.btn.btn-default').click
    expect(page).to have_content 'Applicant 1 - Information'
    fill_in 'applicants[0].phones[0].number', with: "\t"
    expect(page).to have_selector(:css, 'select:focus')
  end
  scenario 'validate county use only card', set_auth_header: true do
    visit root_path
    click_button 'Create RFA Application (Form 01)'
    expect(page).to have_content 'Rfa-01A Section Summary'
    page.find('#Rfa01AOverview').find('a.btn.btn-default').click
    expect(page).to have_content 'Applicant 1 - Information'
    fill_in('applicants[0].first_name', with: Faker::Name.first_name, match: :prefer_exact)
    fill_in('applicants[0].last_name', with: Faker::Name.last_name, match: :prefer_exact)
    select 'Kings', from: 'county'
    click_button('Save Progress')
  end
  scenario 'validate Relationship between Applicant', set_auth_header: true do
    visit root_path
    click_button 'Create RFA Application (Form 01)'
    expect(page).to have_content 'Rfa-01A Section Summary'
    page.find('#Rfa01AOverview').find('a.btn.btn-default').click
    expect(page).to have_content 'Applicant 1 - Information'
    fill_in('applicants[0].first_name', with: Faker::Name.first_name, match: :prefer_exact)
    fill_in('applicants[0].last_name', with: Faker::Name.last_name, match: :prefer_exact)
    click_button('Add Another Applicant +')
    fill_in('applicants[1].first_name', with: Faker::Name.first_name, match: :prefer_exact)
    fill_in('applicants[1].last_name', with: Faker::Name.last_name, match: :prefer_exact)
    select 'Married', from: 'relationship_type'
    select 'Alaska', from: 'place_of_relationship_state'
    click_button('Save Progress')
    expect(find_field('relationship_type').value).to eq '1'
    visit page.driver.current_url
    expect(find_field('relationship_type').value).to eq '1'
    expect(find_field('place_of_relationship_state').value).to eq 'AK'
    visit page.driver.current_url
    select 'Other', from: 'relationship_type'
    fill_in('other_relationship', with: 'test', match: :prefer_exact)
    click_button('Save Progress')
    expect(find_field('relationship_type').value).to eq '5'
    expect(find_field('other_relationship').value).to eq 'test'
    visit page.driver.current_url
    select 'Cohabitants', from: 'relationship_type'
    click_button('Save Progress')
  end

  scenario 'validate Residence card', set_auth_header: true do
    visit root_path
    click_button 'Create RFA Application (Form 01)'
    expect(page).to have_content 'Rfa-01A Section Summary'
    page.find('#Rfa01AOverview').find('a.btn.btn-default').click
    expect(page).to have_content 'Applicant 1 - Information'
    fill_in('applicants[0].first_name', with: Faker::Name.first_name, match: :prefer_exact)
    fill_in('applicants[0].middle_name', with: 'k', match: :prefer_exact)
    fill_in('applicants[0].last_name', with: Faker::Name.last_name, match: :prefer_exact)
    expect(page).to have_content 'IV. Minor Children Residing in the Home'
    fill_in('Residentialstreet_address', with: '2870 something else', match: :prefer_exact)
    fill_in('Residentialzip', with: '12345', match: :prefer_exact)
    find('#mailing_similarNo').click
    fill_in('Mailingstreet_address', with: 'maing address here', match: :prefer_exact)
    fill_in('Mailingzip', with: '12345', match: :prefer_exact)
    fill_in('Mailingcity', with: 'secondary city', match: :prefer_exact)
    expect(page).to have_content 'About This Residence'
    select 'Own', from: 'residenceTypes'
    find('#weaponsYes').click
    find('#body_of_water_existYes').click
    find('#others_using_residence_as_mailingYes').click
    fill_in('directions', with: 'directions goes here', match: :prefer_exact)
    page.find(:css, '.languages').click
    page.find(:css, '#react-select-4--option-0').click
    page.find(:css, '.languages').click
    page.find(:css, '#react-select-4--option-1').click
    expect(page).to have_css(:span, text: 'American Sign Language')
    expect(page).to have_css(:span, text: 'Armenian')
    click_button('Save Progress')
    visit page.driver.current_url

    expect(find_field('residenceTypes').value).to eq '1'
    expect(find_field('mailing_similartrue').value).to eq 'true'
    expect(find_field('weaponstrue').value).to eq 'true'
    expect(find_field('body_of_water_existtrue').value).to eq 'true'
    expect(find_field('others_using_residence_as_mailingtrue').value).to eq 'true'
  end

  scenario 'validate Minor Children card', set_auth_header: true do
    visit root_path
    click_button 'Create RFA Application (Form 01)'
    expect(page).to have_content 'Rfa-01A Section Summary'
    page.find('#Rfa01AOverview').find('a.btn.btn-default').click

    expect(page).to have_content 'Applicant 1 - Information'
    applicant_1_first_name = Faker::Name.first_name
    applicant_1_last_name  = Faker::Name.last_name
    applicant_1_full_name  = applicant_1_first_name + ' ' + 'k' + ' ' + applicant_1_last_name
    fill_in('applicants[0].first_name', with: applicant_1_first_name, match: :prefer_exact)
    fill_in('applicants[0].middle_name', with: 'k', match: :prefer_exact)
    fill_in('applicants[0].last_name', with: applicant_1_last_name, match: :prefer_exact)
    expect(page).to have_content 'IV. Minor Children Residing in the Home'
    fill_in('minor_children[0].relationship_to_applicant_freeform', with: 'child', match: :prefer_exact)
    select applicant_1_full_name, from: 'applicant_id'
    select 'Yes', from: 'child_financially_supported'
    select 'Yes', from: 'child_adopted'
    select 'Male', from: 'minor_gender'
    click_button('Save Progress')
    visit page.driver.current_url
    expect(find_field('minor_children[0].relationship_to_applicant_freeform').value).to eq 'child'
    applicant_id_value = find(:select, 'applicant_id').value
    expect(find_field('applicant_id').value).to eq applicant_id_value
  end

  scenario 'validate Other Adults card', set_auth_header: true do
    visit root_path
    click_button 'Create RFA Application (Form 01)'
    expect(page).to have_content 'Rfa-01A Section Summary'
    page.find('#Rfa01AOverview').find('a.btn.btn-default').click
    expect(page).to have_content 'Applicant 1 - Information'
    applicant_1_first_name = Faker::Name.first_name
    applicant_1_last_name  = Faker::Name.last_name
    applicant_1_full_name  = applicant_1_first_name + ' ' + 'k' + ' ' + applicant_1_last_name
    fill_in('applicants[0].first_name', with: applicant_1_first_name, match: :prefer_exact)
    fill_in('applicants[0].middle_name', with: 'k', match: :prefer_exact)
    fill_in('applicants[0].last_name', with: applicant_1_last_name, match: :prefer_exact)
    select applicant_1_full_name, from: 'other_adults[0].availableApplicants'
    expect(page).to have_content 'V.Other Adults Residing or Regularly Present in the Home'

    fill_in('other_adults[0].relationship_to_applicant_freeform', with: 'child', match: :prefer_exact)

    fill_in('other_adults[0].first_name', with: Faker::Name.first_name, match: :prefer_exact)
    click_button('Save Progress')
    visit page.driver.current_url

    expect(find_field('other_adults[0].relationship_to_applicant_freeform').value).to eq 'child'
    availableApplicantId = find_field('other_adults[0].availableApplicants').value
    expect(find_field('other_adults[0].availableApplicants').value).to eq availableApplicantId
  end

  scenario 'validate Marital History card', set_auth_header: true do
    visit root_path
    click_button 'Create RFA Application (Form 01)'
    expect(page).to have_content 'Rfa-01A Section Summary'
    page.find('#Rfa01AOverview').find('a.btn.btn-default').click
    expect(page).to have_content 'Applicant 1 - Information'
    applicant_1_first_name = 'Super'
    applicant_1_last_name  = 'Man'
    applicant_1_full_name  = applicant_1_first_name + ' ' + 'k' + ' ' + applicant_1_last_name
    fill_in('applicants[0].first_name', with: applicant_1_first_name, match: :prefer_exact)
    fill_in('applicants[0].middle_name', with: 'k', match: :prefer_exact)
    fill_in('applicants[0].last_name', with: applicant_1_last_name, match: :prefer_exact)
    select applicant_1_full_name, from: 'applicantsHistory.former_spouses[0].applicant_id'
    expect(page).to have_content 'VI.Applicant\'s Marital History'
    select 'Married', from: 'applicantsHistory.former_spouses[0].relationship_type'

    click_button('Save Progress')
    expect(find_field('applicantsHistory.former_spouses[0].relationship_type').value).to eq '1'
    expect(find_field('applicantsHistory.former_spouses[0].applicant_id')).to have_content(applicant_1_full_name)

    visit page.driver.current_url
    expect(find_field('applicantsHistory.former_spouses[0].relationship_type').value).to eq '1'
    expect(find_field('applicantsHistory.former_spouses[0].applicant_id')).to have_content(applicant_1_full_name)
  end

  scenario 'validate Foster Care card', set_auth_header: true do
    visit root_path
    click_button 'Create RFA Application (Form 01)'
    expect(page).to have_content 'Rfa-01A Section Summary'
    page.find('#Rfa01AOverview').find('a.btn.btn-default').click
    expect(page).to have_content 'Applicant 1 - Information'
    fill_in('applicants[0].first_name', with: Faker::Name.first_name, match: :prefer_exact)
    fill_in('applicants[0].middle_name', with: 'k', match: :prefer_exact)
    fill_in('applicants[0].last_name', with: Faker::Name.last_name, match: :prefer_exact)
    expect(page).to have_content 'VIII. Foster Care / Adoption / Licensure History'
    find('#q1-select-dropdownYes').click

    click_button('Save Progress')
    visit page.driver.current_url

    expect(find_field('q1-select-dropdowntrue').value).to eq 'true'
  end

  scenario 'validate references card', set_auth_header: true do
    visit root_path
    click_button 'Create RFA Application (Form 01)'
    expect(page).to have_content 'Rfa-01A Section Summary'
    page.find('#Rfa01AOverview').find('a.btn.btn-default').click
    expect(page).to have_content 'Applicant 1 - Information'
    fill_in('applicants[0].first_name', with: Faker::Name.first_name, match: :prefer_exact)
    fill_in('applicants[0].middle_name', with: 'k', match: :prefer_exact)
    fill_in('applicants[0].last_name', with: Faker::Name.last_name, match: :prefer_exact)
    expect(page).to have_content 'IX. References'
    fill_in('first_name', with: 'Sam', match: :prefer_exact)

    click_button('Save Progress')
    visit page.driver.current_url
  end

  scenario 'RFA page dictionaries', set_auth_header: true do
    visit root_path
    click_button 'Create RFA Application (Form 01)'
    expect(page).to have_content 'Rfa-01A Section Summary'
    page.find('#Rfa01AOverview').find('a.btn.btn-default').click
    expect(page).to have_select('minor_gender', with_options: ['', 'Male', 'Female'])
    expect(page).to have_select('residenceTypes', with_options: %w[Own Rent Lease])
  end
end
