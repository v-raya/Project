require 'rails_helper'
require 'vcr'

RSpec.feature 'Facilities', js: true do
  scenario 'List of facilities' do
    visit '/facilities'
    expect(page).to have_text('MARCH, AMY CFH')
  end
end


