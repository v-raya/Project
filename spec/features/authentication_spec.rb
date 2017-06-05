require 'rails_helper'
require 'vcr'

RSpec.feature 'Authentication', js: true do

  scenario 'List of facilities' do
    visit '/facilities'
    # we may need to change the guest guest later
    page.fill_in 'username', with: 'guest'
    page.fill_in 'password', with: 'guest'
    page.click_button 'Sign In'
    sleep(3)
    expect(page).to have_text('MARCH, AMY CFH')
  end
end
