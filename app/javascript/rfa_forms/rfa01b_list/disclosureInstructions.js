import React from 'react'

export default class DisclosureInstructions extends React.Component {
  render () {
    return (
      <div className='disclosure_instructions'>
        <div id='DisclosureInstructionsCard' onClick={() => this.props.setFocusState('DisclosureInstructionsCard')}
          className={this.props.getFocusClassName('disclosure_instructions') + ' ' + 'card phone-section double-gap-top'}>
          <div className='card-header'><span>Disclosure Instructions (Must read before section II is completed)</span></div>
          <div className='card-body'>
            <div className='row list-item'>
            I'm Disclosure Instructions
            </div>
          </div>
        </div>
      </div>
    )
  }
}
