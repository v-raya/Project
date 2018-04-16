# frozen_string_literal: true

require 'rails_helper'

module Content
  describe ContentService do
    describe 'content' do
      before :each do
        @my_content_service = ContentService.new('services' => [
                                                   {
                                                     'name' => 'Foo',
                                                     'id' => 'foo',
                                                     'enabled' => true,
                                                     'link' => 'http://dev.foo.com/123'
                                                   }
                                                 ])
      end
      it 'includes only enabled elements' do
        resources = @my_content_service.send :filter_disabled_content
        expect(resources[:services].size).to eq 1
      end
    end

    context 'filtering' do
      let(:test_subject) { ContentService.new(YAML.load_file('config/content.yml')) }

      describe '#filter_content' do
        it 'filters out facility button when no \'CWS Case Management System\' or \'Resource Management\' privilege' do
          profile = FactoryGirl.build(:user, roles: ['some roles'], privileges: ['some privileges'])
          actual_result = test_subject.filter_content(profile)
          expect(actual_result[:services].select { |e| e['id'] == 'facility_search' }).to eq []
        end

        it 'doesn\'t filter facility button when profile has \'CWS Case Management System\' or \'Resource Management\' privilege' do
          profile = FactoryGirl.build(:user, roles: [], privileges: ['CWS Case Management System'])
          actual_result = test_subject.filter_content(profile)
          filtered_result_size = actual_result[:services].select { |e| e['id'] == 'facility_search' }.size
          expect(filtered_result_size).to eq 1
        end
      end
    end
  end
end
