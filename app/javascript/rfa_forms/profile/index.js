import React from 'react'
import Immutable from 'immutable'
import CardsGroupLayout from 'components/common/cardsGroupLayout.js'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'

export default class Profile extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      user: this.props.user,
      rfa_application: this.props.rfa_application.id,
      tracking: this.props.rfa_application.tracking_id
    }
  }

  render () {
    const trackingId = this.props.rfa_application.tracking_id
    let trackingUrl = trackingId
      ? urlPrefixHelper('/rfa/a01/' + this.state.rfa_application + '/tracking/' + trackingId + '/edit')
      : urlPrefixHelper('/rfa/a01/' + this.state.rfa_application + '/tracking/')
    return (
      <div className='col-md-8'><a href={trackingUrl} >tracking link</a></div>

    )
  }
}
