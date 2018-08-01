import React from 'react'
import {sortbyDate} from 'search/common/commonUtils'

export const childrenColumns = [
  {
    Header: props => <span> CLIENT ID <i className="fa fa-angle-down"/></span>,
    accessor: 'display_client_id'
  },
  {
    Header: props => <span> FIRST NAME <i className="fa fa-angle-down"/></span>,
    maxWidth: 164,
    accessor: 'first_name'
  },
  {
    Header: props => <span> LAST NAME <i className="fa fa-angle-down"/></span>,
    maxWidth: 164,
    accessor: 'last_name'
  },
  {
    Header: props => <span> GENDER <i className="fa fa-angle-down"/></span>,
    maxWidth: 76,
    accessor: 'gender'
  },
  {
    Header: props => <span> AGE <i className="fa fa-angle-down"/></span>,
    maxWidth: 64,
    accessor: 'age'
  },
  {
    Header: props => <span> DATE OF BIRTH <i className="fa fa-angle-down"/></span>,
    maxWidth: 141,
    accessor: 'date_of_birth',
    sortMethod: (a, b) => sortbyDate(a, b)
  },
  {
    id: 'dateOfPlacement',
    Header: props => <span> DATE OF PLACEMENT <i className="fa fa-angle-down"/></span>,
    maxWidth: 190,
    accessor: 'date_of_placement',
    sortMethod: (a, b) => sortbyDate(a, b)
  },
  {
    Header: props => <span> CHILD'S SOCIAL WORKER <i className="fa fa-angle-down"/></span>,
    maxWidth: 205,
    accessor: 'assigned_worker'
  },
  {
    Header: props => <span> COUNTY OF ORIGIN <i className="fa fa-angle-down"/></span>,
    accessor: 'county_of_origin'
  }
]

export const complaintsColumns = [
  {
    Header: 'COMPLAINT DATE',
    accessor: 'complaint_date'
  },
  {
    Header: 'ASSIGNED WORKER',
    accessor: 'assigned_worker'
  },
  {
    Header: 'CONTROL NUMBER',
    accessor: 'control_number'
  },
  {
    Header: 'PRIORITY',
    accessor: 'priority_level'
  },
  {
    Header: 'STATUS',
    accessor: 'status'
  },
  {
    Header: 'APPROVAL DATE',
    accessor: 'approval_date'
  }
]

export const allegationColumns = [
  {
    Header: '',
    maxWidth: 50,
    accessor: 'index_subcomponent'
  },
  {
    maxWidth: 300,
    Header: 'TYPE / CODE',
    accessor: 'type_code'
  },
  {
    Header: 'ALLEGATION DESCRIPTION',
    maxWidth: 700,
    accessor: 'allegation'
  },
  {
    maxWidth: 200,
    Header: 'RESOLUTION CODE',
    accessor: 'resolution_type_description'
  }
]
