require 'rails_helper'
require 'vcr'

RSpec.feature 'Facilities', js: true do
    scenario 'List of facilities' do
        visit '/facilities'
        expect(page).to have_text('MARCH, AMY CFH')
    end
    scenario 'click into facility show from list of facilities' do
        visit '/facilities'
        click_link("MARCH, AMY CFH")
        expect(page).to have_text('MARCH, AMY CFH')
    end

    scenario 'refresh facility' do
        visit '/facilities'
        click_link("MARCH, AMY CFH")
        expect(page).to have_text('MARCH, AMY CFH')
        page.evaluate_script("window.location.reload()")
        expect(page).to have_text('MARCH, AMY CFH')
    end
end
