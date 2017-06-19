import React, { Component } from 'react'
import FacilityList from './facility_list.jsx'
import './stylesheets/facilities.scss'

export default class Facilities extends Component {
  constructor (props) {
    super(props)
    this.state = { items: props.facilities }
  }

  render () {
    const itemsList = this.state.items.map(item => <FacilityList key={item.fac_nbr} {...item} />)
    return (
      <div className='block'>
        {itemsList}
      </div>
    )
  }
}
