# frozen_string_literal: true

require 'rails_helper'
require 'vcr'
require 'faker'

RSpec.feature 'RFA01C', js: true do

  scenario 'validate rfa01c', set_auth_header: true do
    visit root_path
    click_button 'Create RFA Application'
    expect(page).to have_content 'Applicant 1 - Information'
    first_name = 'Kimberley'
    last_name = 'RReily'
    fill_in('applicants[0].first_name', with: first_name, match: :prefer_exact)
    fill_in('applicants[0].middle_name', with: 'k', match: :prefer_exact)
    fill_in('applicants[0].last_name', with: last_name, match: :prefer_exact)
    find('#child_identifiedYes').click
    find('#child_in_homeYes').click

    click_button('Save Progress')
    visit current_url
    expect(page.find('#edit_page > div > div > div > div.left-content.col-xs-3.col-sm-3.col-md-3.col-lg-3 > div > div.nav-menu.col-sm-10 > div > div.nav-menu > div:nth-child(3) > div > div > div > div > nav > ul > div > li > a').text).to eq('child identified')
    click_link('child identified')
    fill_in('identified_children[0].first_name', with: first_name, match: :prefer_exact)
    fill_in('identified_children[0].middle_name', with: 'k', match: :prefer_exact)
    fill_in('identified_children[0].last_name', with: last_name, match: :prefer_exact)
    fill_in('Residentialstreet_address', with: 'address here', match: :prefer_exact)
    fill_in('identified_children[0].date_of_birth', with: '01/01/2000', match: :prefer_exact)
    select 'Sr', from: 'identified_children[0].name_suffix'
    select 'TK', from: 'grade'
    fill_in('Residentialzip', with: '12345', match: :prefer_exact)
    find(:css, '.Select--single').click
    find(:css, '#react-select-2--option-0').click
    select 'Male', from: 'gender'
    fill_in('name_of_school', with: 'School name', match: :prefer_exact)
    click_button('Save Progress')
    visit page.driver.current_url
    expect(page).to have_css(:span, text: 'Alabama')
    expect(find_field('gender').value).to eq '1'
    expect(find_field('name_of_school').value).to eq 'School name'
    expect(find_field('Residentialzip').value).to eq '12345'
    expect(find_field('grade').value).to eq '1'
    expect(find_field('identified_children[0].name_suffix').value).to eq '6'
    expect(find_field('Residentialstreet_address').value).to eq 'address here'
    expect(find_field('identified_children[0].date_of_birth').value).to eq '01/01/2000'
  end

  scenario 'validate submit disabled when Rfa-01A is not valid', set_auth_header: true do
    visit root_path
    click_button 'Create RFA Application'
    expect(page).to have_content 'Applicant 1 - Information'
    first_name = 'Dillonish'
    last_name = 'Wisozkish'
    fill_in('applicants[0].first_name', with: first_name, match: :prefer_exact)
    fill_in('applicants[0].middle_name', with: 'k', match: :prefer_exact)
    fill_in('applicants[0].last_name', with: last_name, match: :prefer_exact)
    find('#child_identifiedYes').click
    find('#child_in_homeYes').click
    click_button('Save Progress')
    visit current_url
    click_link('child identified')
    expect(page).to have_button('Submit', disabled: true)
  end

  scenario 'validate submit enabled when Rfa-01A is valid', set_auth_header: true do
    visit root_path
    click_button 'Create RFA Application'
    expect(page).to have_content 'Applicant 1 - Information'
    first_name = 'Paul'
    last_name = 'Smit'
    fill_in('applicants[0].first_name', with: first_name, match: :prefer_exact)
    fill_in('applicants[0].middle_name', with: 'k', match: :prefer_exact)
    fill_in('applicants[0].last_name', with: last_name, match: :prefer_exact)
    find('#child_identifiedYes').click
    find('#child_in_homeYes').click
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
    fill_in('residence.other_people_using_residence_as_mailing[0].first_name', with: Faker::Name.first_name, match: :prefer_exact)
    fill_in('residence.other_people_using_residence_as_mailing[0].last_name', with: Faker::Name.first_name, match: :prefer_exact)
    page.find(:css, '.languages').click
    page.find(:css, '#react-select-4--option-0').click
    page.find(:css, '.languages').click
    page.find(:css, '#react-select-4--option-1').click
    expect(page).to have_button('Submit', disabled: false)
    click_button('Save Progress')
    visit page.driver.current_url
    click_link("#{first_name} #{last_name}")
    expect(page).to have_button('Submit', disabled: true)
    fill_in('applicant_first_name', with: 'first name', match: :prefer_exact)
    fill_in('applicant_last_name', with: 'last name', match: :prefer_exact)
    fill_in('NameOfResourceFamily', with: 'test', match: :prefer_exact)
    fill_in('date_of_birth', with: '11/11/1111', match: :prefer_exact)
    fill_in('Residentialstreet_address', with: '2870 something else', match: :prefer_exact)
    fill_in('Residentialzip', with: '12345', match: :prefer_exact)
    fill_in('Residentialcity', with: 'Sacremento', match: :prefer_exact)
    find('#react-select-2--value').click
    find('#react-select-2--option-1').click
    expect(page).to have_button('Submit', disabled: false)
    click_button('Save Progress')
    click_link('child identified')
    find('label[for="identified_children[0].child_in_hometrue"]').click
    fill_in('identified_children[0].first_name', with: first_name, match: :prefer_exact)
    fill_in('identified_children[0].middle_name', with: 'k', match: :prefer_exact)
    fill_in('identified_children[0].last_name', with: last_name, match: :prefer_exact)
    fill_in('identified_children[0].date_of_birth', with: '01/01/2000', match: :prefer_exact)
    click_button('Save Progress')
    expect(find_field('identified_children[0].date_of_birth').value).to eq '01/01/2000'
    expect(page).to have_button('Submit', disabled: false)
    click_button 'Submit'
    end
end