import React from 'react'
import Immutable from 'immutable'
import CardsGroupLayout from 'components/common/cardsGroupLayout.js'

export default class TrackingList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      user: this.props.user,
      rfa_application: this.props.rfa_application,
      tracking: this.props.tracking
    }
  }

  render () {
    return (
      <CardsGroupLayout>
        <div>tracking id: {this.state.tracking.id}</div>
        <div>rfa_1a_id: {this.state.rfa_application.id}</div>
      </CardsGroupLayout>
    )
  }
}
