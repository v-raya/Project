import React from 'react'
import CriminalFields from './criminalFields'
import {DropDownField} from 'components/common/dropDownField'
import {yesNo} from 'constants/constants'

export default class CaliforniaCriminalBackground extends React.Component {
  addCard () {
    console.log('add card')
  }

  render () {
    let crimes = this.props.crimes || []
    return (
      <div className='ca_criminal_background'>
        <div id='CACriminalBackgroundCard' onClick={() => this.props.setFocusState('CACriminalBackgroundCard')}
          className={this.props.getFocusClassName('ca_criminal_background') + ' ' + 'card phone-section double-gap-top'}>
          <div className='card-header'><span>Disclosure of Criminal Background - California (only)</span></div>
          <div className='card-body'>
            <div className='row list-item'>
              <div>Have you ever been convicted of a crime in California?</div>
              <div>You need not disclose any marijuana-related offenses covered by the marijuana reform legislation codified in Health and Safety Code
 sections 11361.5 and 11361.7.</div>
              <DropDownField
                gridClassName='col-md-4'
                id='YesNo'
                selectClassName={'reusable-select'}
                value={''}
                optionList={yesNo.items}
                label={''}
                onChange={(event) => this.props.onFieldChange()} />
              {crimes.map((crime, index) => {
                return (
                  <CriminalFields
                    onFieldChange={this.props.onFieldChange()} />
                )
              })}
            </div>
            <div className='text-center'>
              <button onClick={this.addCard} className='btn btn-default'>Add Another Offense - California (only) +</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
