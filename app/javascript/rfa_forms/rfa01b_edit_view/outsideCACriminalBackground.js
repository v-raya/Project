import React from 'react'
import {DropDownField} from 'components/common/dropDownField'
import {CriminalFields} from './criminalFields'
import {yesNo} from 'constants/constants'

export default class OutsideCACriminalBackground extends React.Component {
  addCard () {
    console.log('add card')
  }
  render () {
    let crimes = this.props.crimes || []

    return (
      <div className='outside_ca_criminal_background'>
        <div id='OutsideCACriminalBackgroundCard' onClick={() => this.props.setFocusState('OutsideCACriminalBackgroundCard')}
          className={this.props.getFocusClassName('outside_ca_criminal_background') + ' ' + 'card phone-section double-gap-top'}>
          <div className='card-header'><span>Disclosure of Criminal Background - Outside of California </span></div>
          <div className='card-body'>
            <div className='row list-item'>
              <div>Have you ever been convicted of a crime in another state, federal court, military, or a jurisdiction outside of the U.S.?</div>
              <div>Criminal convictions from another state or federal court are considered the same as criminal convictions in California.</div>
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
              <button onClick={this.addCard} className='btn btn-default'>Add Another Offense - Outside of California +</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
