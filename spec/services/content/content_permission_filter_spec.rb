# frozen_string_literal: true

require 'rails_helper'
require 'spec_helper'
require 'json'

module Content
  describe ContentPermissionFilter do
    let(:test_subject) { Content::ContentPermissionFilter.new() }

    describe 'permitted?' do
      it 'returns true when no roles and no privileges' do
        service = { 'roles' => [], 'privileges' => [] }
        profile = FactoryGirl.build(:user, roles: ['A'], privileges: ['1'])
        expect(test_subject.permitted?(service, profile)).to eq true
      end

      it 'returns true when permitted role exists in profile' do
        service = { 'roles' => ['A', 'C'], 'privileges' => ['1'] }
        profile = FactoryGirl.build(:user, roles: ['A'], privileges: ['1'])
        expect(test_subject.permitted?(service, profile)).to eq true
      end

      it 'returns true when permitted role exists in profile and no permitted privileges' do
        service = { 'roles' => ['A', 'C'], 'privileges' => ['100'] }
        profile = FactoryGirl.build(:user, roles: ['A', 'B'], privileges: ['1', '2'])
        expect(test_subject.permitted?(service, profile)).to eq true
      end

      it 'returns false when permitted privilege exists in profile' do
        service = { 'roles' => [], 'privileges' => ['1', '100'] }
        profile = FactoryGirl.build(:user, roles: ['A', 'B'], privileges: ['1', '2'])
        expect(test_subject.permitted?(service, profile)).to eq false
      end

      it 'returns false when permitted privilege exists in profile and no permitted roles' do
        service = { 'roles' => ['Z'], 'privileges' => ['1', '100'] }
        profile = FactoryGirl.build(:user, roles: ['A', 'B'], privileges: ['1', '2'])
        expect(test_subject.permitted?(service, profile)).to eq false
      end

      it 'returns false when no permitted roles in profile' do
        service = { 'roles' => ['X'], 'privileges' => [] }
        profile = FactoryGirl.build(:user, roles: ['A'], privileges: ['1'])
        expect(test_subject.permitted?(service, profile)).to eq false
      end

      it 'returns false when no permitted privileges in profile' do
        service = { 'roles' => [], 'privileges' => ['100'] }
        profile = FactoryGirl.build(:user, roles: ['A'], privileges: ['1'])
        expect(test_subject.permitted?(service, profile)).to eq false
      end

      it 'returns false when no permitted roles and privileges in profile' do
        service = { 'roles' => ['X'], 'privileges' => ['100'] }
        profile = FactoryGirl.build(:user, roles: ['A'], privileges: ['1'])
        expect(test_subject.permitted?(service, profile)).to eq false
      end
    end
  end
end
