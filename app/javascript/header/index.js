import React from 'react'
import {GlobalHeader} from 'react-wood-duck'

export default class HeaderComponent extends React.Component {
  constructor (props) {
    super(props)
    this.logoutCallback = this.logoutCallback.bind(this)
  }

  redirectUrl (path) {
    window.location.href = path
  }

  logoutCallback () {
    this.redirectUrl(this.props.logoutUrl)
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
