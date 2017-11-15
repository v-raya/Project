require 'rails_helper'
require 'vcr'

RSpec.feature 'GlobalHeader', js: true do

  before(:each) do
    allow_any_instance_of(CalsBaseController).to receive(:logout).and_return(true)

  end

  scenario 'successful logout', set_auth_header: true do
    visit root_path
    expect(page).to have_link('PN')
    click_link 'PN'
    expect(page).to have_content('Logout')
    #expect(current_path).to eql(logout_path)
  end

end