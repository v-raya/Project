import React from 'react'
import Immutable from 'immutable'
import CheckListRow from 'rfa_forms/rfa02_edit_view/backGroundCheckRows/checkListRow.js'
import {shallow} from 'enzyme'

describe('RFA 02 Page Test Table rows', () => {
  let checkListRowComp, handleChageSpy
  beforeEach(() => {
    const props = {
      editMode: false,
      id: 'checklist',
      cardIndex: 0,
      checkListDocuments: Immutable.fromJS([{
        'notes': '',
        'title': '',
        'checked': false,
        'date': ''
      }
      ])
    }
    checkListRowComp = shallow(<CheckListRow {...props}/>)
  })
  it('render row component', () => {
    expect(checkListRowComp.length).toBe(1)
  })
})
