import React, { Component } from 'react'
import FacilityList from './facility_list.jsx'

export default class Facility extends Component {
  constructor (props) {
    super(props)
    this.state = { items: JSON.parse(props.facilities) }
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
