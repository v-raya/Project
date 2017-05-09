require 'rails_helper'

RSpec.feature 'Heartbeat', js: true do
    scenario 'Show heartbeat page without authentication' do
        visit '/heartbeat'
        expect(page).to have_text('cals heartbeat')
    end
end
