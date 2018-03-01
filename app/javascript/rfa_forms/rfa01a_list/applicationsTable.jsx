import React from 'react'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'

export default class ApplicationsTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      applicationsList: this.props.applications
    }
  }
  render () {
    const applicationList = this.state.applicationsList
    return (
      <div className='rfa01a-list col-xs-12 col-sm-12 col-md-12 col-lg-12'>
        <div className='table'>
          <div className='table-row'>
            <div className='table-cell'>Application Id</div>
            <div className='table-cell'>First name</div>
            <div className='table-cell'>Last name</div>
          </div>
          {
            applicationList && applicationList.map((application, index) => {
              return (
                <a href={urlPrefixHelper('/rfa/a01/' + application.id + '/packet')} className='table-row' key={index}>
                  <div className='table-cell'>{application.id}</div>
                  <div className='table-cell'>{application.applicants && application.applicants[0].first_name}</div>
                  <div className='table-cell'>{application.applicants && application.applicants[0].last_name}</div>
                </a>
              )
            })
          }
        </div>
      </div>
    )
  }
}
