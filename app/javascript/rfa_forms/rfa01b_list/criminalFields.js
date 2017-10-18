import React from 'react'
import {InputComponent} from 'components/common/inputFields'
import {TextAreaComponent} from 'components/common/textArea'

export default class CriminalFields extends React.Component {
  render () {
    return (
      <div>
        <bold>If you have been convicted of a crime in California, another state,
         or in federal court, provide the following information:</bold>
        <InputComponent
          gridClassName='col-md-12'
          id='offenseReason'
          value={''}
          label='What was the offense?'
          onChange={(event) => this.props.onFieldChange()} />

        <InputComponent
          gridClassName='col-md-12'
          id='offenseReason'
          value={''}
          label='Where did the offense happen? (City, State, Country or other location information)'
          onChange={(event) => this.props.onFieldChange()} />

        <InputComponent
          gridClassName='col-md-4'
          id='offenseReason'
          value={''}
          label={'When did the offense happen?'}
          onChange={(event) => this.props.onFieldChange()} />

        <TextAreaComponent
          gridClassName='col-md-12'
          id={'id'}
          value={''}
          label={'Explain what happened.'}
          onChange={(event) => this.props.onFieldChange()} />
      </div>
    )
  }
}
