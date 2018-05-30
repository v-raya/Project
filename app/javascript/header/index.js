import React from 'react'
import {GlobalHeader} from 'react-wood-duck'
import {deleteState} from 'store/browserStorage'
import {userNameFormatter} from 'helpers/commonHelper'

export default class HeaderComponent extends React.Component {
  constructor (props) {
    super(props)
    this.logoutCallback = this.logoutCallback.bind(this)
  }

  redirectUrl (path) {
    window.location.href = path
  }

  logoutCallback () {
    deleteState()
    this.redirectUrl(this.props.logoutUrl)
  }

  render () {
    const userFullName = userNameFormatter(this.props.user.first_name, this.props.user.last_name)
    return (
      <div>
        <GlobalHeader
          logoutUrl={this.props.logoutUrl}
          profileName={userFullName}
          logoutCallback={this.logoutCallback} />
      </div>
    )
  }
}
