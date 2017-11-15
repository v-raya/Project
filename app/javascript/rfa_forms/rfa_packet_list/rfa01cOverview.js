import React from 'react'
import PropTypes from 'prop-types'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'
import CardLayout from 'components/common/cardLayout'
import {getCsrfToken} from 'helpers/http'

const blankChildIdentified = Object.freeze({
  child_identified: false
})

export default class Rfa01COverview extends React.Component {
  render () {
    let applicationId = this.props.applicationId
    let childDesired = this.props.childDesired
    let childIdentified = childDesired.child_identified
    return (
      <CardLayout
        idClassName='rfa_01c_overview'
        id='Rfa01COverview'
        label='Rfa-01C Section Summary'
        handleOnClick={() => this.props.setFocusState('Rfa01COverview')}
        focusClassName={this.props.getFocusClassName('Rfa01COverview') + ' ' + 'card phone-section double-gap-top'}>
        {childIdentified &&
          <form action={urlPrefixHelper('/rfa/a01/' + this.props.applicationId + '/c01/')} method="post">
            <input type="hidden" name="authenticity_token" value={getCsrfToken('csrf-token')} />
            <button className="btn btn-default" type='submit'><p>Start RFA 01 C</p></button>
          </form>
        }
      </CardLayout>

    )
  }
}

Rfa01COverview.propTypes = {
  applicationId: PropTypes.string,
  childDesired: PropTypes.object,
  setFocusState: PropTypes.func,
  getFocusClassName: PropTypes.func
}

Rfa01COverview.defaultProps = {
  childDesired: blankChildIdentified

}
