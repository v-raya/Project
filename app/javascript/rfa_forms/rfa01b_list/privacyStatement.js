import React from 'react'

export default class PrivacyStatement extends React.Component {
  render () {
    return (
      <div className='privacy_statement'>
        <div id='PrivacyStatementCard' onClick={() => this.props.setFocusState('PrivacyStatementCard')}
          className={this.props.getFocusClassName('privacy_statement') + ' ' + 'card phone-section double-gap-top'}>
          <div className='card-header'><span>Privacy Statement</span></div>
          <div className='card-body'>
            <div className='row list-item'>
            I'm PrivacyStatement
            </div>
          </div>
        </div>
      </div>
    )
  }
}
