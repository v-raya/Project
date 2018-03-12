import React from 'react'
import {GlobalHeader} from 'react-wood-duck'

export default class GlobalHeaderComponent extends React.Component {
  constructor (props) {
    super(props)
    this.logoutCallback = this.logoutCallback.bind(this)
  }

  logoutCallback (logoutUrl) {
    window.location.href = logoutUrl
  }

  render () {
    return (
      <div>
        <GlobalHeader
          logoutUrl={this.props.logoutUrl}
          profileName='Profile Name'
          profileAvatar='PN'
          logoutCallback={this.logoutCallback} />
      </div>
    )
  }
}
