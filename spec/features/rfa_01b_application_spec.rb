require 'rails_helper'
require 'vcr'
require 'faker'

RSpec.feature 'RFA01B', js: true do

  scenario 'validate rfa01b', set_auth_header: true do
    visit root_path
    click_button 'Create RFA Application (Form 01)'
    expect(page).to have_content 'Rfa-01A Section Summary'
    page.find('#Rfa01AOverview').find('a.btn.btn-default').click
    expect(page).to have_content 'Applicant 1 - Information'
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name
    fill_in('first_name', with: first_name, :match => :prefer_exact)
    fill_in('middle_name', with: 'k', :match => :prefer_exact)
    fill_in('last_name', with: last_name, :match => :prefer_exact)
    click_button('Save Progress')

    packet_url = current_url.gsub('/edit', '') + '/packet'

    visit current_url
    visit packet_url

    page.find('#Rfa01BOverview').find('a.btn.btn').click
    fill_in('NameOfResourceFamily', with: 'test', :match => :prefer_exact)
    fill_in('ssn', with: '123-45-6789' , :match => :prefer_exact)
    fill_in('driversLicenseNumberId', with: 'D123', :match => :prefer_exact)
    find(:select, 'driversLicenseStateId').first(:option, 'Alaska').select_option
    find('[for=californiaCriminalBackgroundRadiotrue]').click
    fill_in('californiaCriminalBackgroundoffenseReason', with: 'test offense', :match => :prefer_exact)
    fill_in('californiaCriminalBackgroundoffenseCity', with: 'test offense city' , :match => :prefer_exact)
    fill_in('californiaCriminalBackgroundOffenseDate', with: 'date of offense', :match => :prefer_exact)
    fill_in('californiaCriminalBackgroundoffenseDetails', with:'offense details' , :match => :prefer_exact)

    find('[for=crimeBackgroundAgainstCohabitantRadiotrue').click
    fill_in('crimeBackgroundAgainstCohabitantoffenseReason', with: 'cohab test offense', :match => :prefer_exact)
    fill_in('crimeBackgroundAgainstCohabitantoffenseCity', with: 'cohab test offense city' , :match => :prefer_exact)
    fill_in('crimeBackgroundAgainstCohabitantOffenseDate', with: 'cohab date of offense', :match => :prefer_exact)
    fill_in('crimeBackgroundAgainstCohabitantoffenseDetails', with:'cohab offense details' , :match => :prefer_exact)

    find('[for=outsideCACriminalBackgroundtrue').click
    fill_in('outsideCaliforniaCriminalBackgroundoffenseReason', with: 'outside test offense', :match => :prefer_exact)
    fill_in('outsideCaliforniaCriminalBackgroundoffenseCity', with: 'outside test offense city' , :match => :prefer_exact)
    fill_in('outsideCaliforniaCriminalBackgroundOffenseDate', with: 'outside date of offense', :match => :prefer_exact)
    fill_in('outsideCaliforniaCriminalBackgroundoffenseDetails', with:'outside offense details' , :match => :prefer_exact)

    click_button('Save Progress')
    visit page.driver.current_url

    expect(find_field('NameOfResourceFamily').value).to eq 'test'
    expect(find_field('ssn').value).to eq '123-45-6789'
    expect(find_field('driversLicenseNumberId').value).to eq 'D123'
    expect(find_field('californiaCriminalBackgroundoffenseReason').value).to eq 'test offense'
    expect(find_field('californiaCriminalBackgroundoffenseCity').value).to eq 'test offense city'
    expect(find_field('californiaCriminalBackgroundOffenseDate').value).to eq 'date of offense'
    expect(find_field('californiaCriminalBackgroundoffenseDetails').value).to eq 'offense details'

    expect(find_field('crimeBackgroundAgainstCohabitantoffenseReason').value).to eq 'cohab test offense'
    expect(find_field('crimeBackgroundAgainstCohabitantoffenseCity').value).to eq 'cohab test offense city'
    expect(find_field('crimeBackgroundAgainstCohabitantOffenseDate').value).to eq 'cohab date of offense'
    expect(find_field('crimeBackgroundAgainstCohabitantoffenseDetails').value).to eq 'cohab offense details'

    expect(find_field('outsideCaliforniaCriminalBackgroundoffenseReason').value).to eq 'outside test offense'
    expect(find_field('outsideCaliforniaCriminalBackgroundoffenseCity').value).to eq 'outside test offense city'
    expect(find_field('outsideCaliforniaCriminalBackgroundOffenseDate').value).to eq 'outside date of offense'
    expect(find_field('outsideCaliforniaCriminalBackgroundoffenseDetails').value).to eq 'outside offense details'
  end
end
