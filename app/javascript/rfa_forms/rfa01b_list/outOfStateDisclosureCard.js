import React from 'react'

export default class OutOfStateDisclosureCard extends React.Component {
  render () {
    return (
      <div className='out_of_state_disclosure_card'>
        <div id='outOfStateDisclosureCard' onClick={() => this.props.setFocusState('outOfStateDisclosureCard')}
          className={this.props.getFocusClassName('out_of_state_disclosure') + ' ' + 'card phone-section double-gap-top'}>
          <div className='card-header'><span>This section applies only to applicants and adults residing in the home</span></div>
          <div className='card-body'>
            <div className='row list-item'>
            I'm out of state
            </div>
          </div>
        </div>
      </div>
    )
  }
}
