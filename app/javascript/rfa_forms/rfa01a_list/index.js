import React from 'react'
import './stylesheets/rfa01a_list.scss'
import ApplicationsTable from './applicationsTable'


export default class Rfa01ListView extends React.Component {
  render () {
    return (
      <ApplicationsTable applications={this.props.applications}/>
    )
  }
}
