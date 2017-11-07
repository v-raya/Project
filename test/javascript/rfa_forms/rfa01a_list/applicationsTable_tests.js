import React from 'react'
import ApplicationTable from 'rfa_forms/rfa01a_list/applicationsTable.jsx'
import ShallowRenderer from 'react-test-renderer/shallow'

describe('Verify Application List View', () => {
  let applications = [
    {
      applicants: [],
      id: 43,
      is_initial_application: false,
      is_other_type: false,
      minor_children: [],
      other_adults: [],
      rfa1b_forms: [],
      rfa1c_forms: []
    },
    {

      applicants: [],
      id: 44,
      is_initial_application: false,
      is_other_type: false,
      minor_children: [],
      other_adults: [],
      rfa1b_forms: [],
      rfa1c_forms: []
    }
  ]
  const AppListViewCard = new ShallowRenderer()
  const listRendered = AppListViewCard.render(<ApplicationTable applications={applications} />)
  it('To Load table', () => {
    expect(listRendered.props.children.props.className).toBe('table')
  })
  it('To have array of Items', () => {
    let applicationTable = listRendered.props.children.props
    expect(applicationTable.children[1].length).toEqual(2)
  })
})
