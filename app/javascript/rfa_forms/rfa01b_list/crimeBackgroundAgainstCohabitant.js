import React from 'react'
import {DropDownField} from 'components/common/dropDownField'
import {CriminalFields} from './criminalFields'
import {yesNo} from 'constants/constants'

export default class CrimeBackgroundAgainstCohabitant extends React.Component {
  render () {
    let crimes = this.props.crimes || []
    return (
      <div className='crime_background_against_cohabitant_card'>
        <div id='crimeBackgroundAgainstCohabitantCard' onClick={() => this.props.setFocusState('crimeBackgroundAgainstCohabitantCard')}
          className={this.props.getFocusClassName('crime_background_against_cohabitant') + ' ' + 'card phone-section double-gap-top'}>
          <div className='card-header'><span>Disclosure of Criminal Background - Against Child / Spouse / Cohabitant</span></div>
          <div className='card-body'>
            <div className='row list-item'>
              <div>Have you ever been arrested for a crime against a child or for spousal/cohabitant abuse?</div>

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
              <button onClick={this.addCard} className='btn btn-default'>Add Another Offense - Against Child / Spouse / Cohabitant +</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
