import React from 'react'
import './stylesheets/rfa01a_list.scss'
import ApplicationsTable from './applicationsTable'
import BreadCrumb from 'components/common/breadCrumb'

export default class Rfa01ListView extends React.Component {
  render () {
    return (
      <div>
        <BreadCrumb />
        <ApplicationsTable applications={this.props.applications} />
      </div>
    )
  }
}
