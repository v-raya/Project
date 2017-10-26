import React from 'react'
import PropTypes from 'prop-types'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'
import CardLayout from 'components/common/cardLayout'

export default class Rfa01BOverview extends React.Component {
  render () {
    return (
      <CardLayout
        idClassName='rfa_01b_overview'
        id='Rfa01BOverview'
        label='Rfa-01B Section Summary'
        handleOnClick={() => this.props.setFocusState('Rfa01BOverview')}
        focusClassName={this.props.getFocusClassName('Rfa01BOverview') + ' ' + 'card phone-section double-gap-top'}>
        <a href={urlPrefixHelper('/rfa/b01/')} className='btn btn-default'>
          <p>Start RFA 01 B</p>
        </a>
      </CardLayout>
    )
  }
}

Rfa01BOverview.propTypes = {
  applicationId: PropTypes.string,
  setFocusState: PropTypes.func,
  getFocusClassName: PropTypes.func
}
