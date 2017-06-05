import React, { Component } from 'react'
import Search from './search'
import './stylesheets/search.scss'

export default class SearchMain extends React.Component {
  render () {
    return (
      <Search {...this.props} />
    )
  }
}
