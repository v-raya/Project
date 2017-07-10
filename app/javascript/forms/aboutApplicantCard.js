import React from 'react'
import {InputComponent} from '../common/inputFields'
import {DropDownField} from '../common/dropDownField'

export default class AboutApplicant extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      educationLevels: {items: this.props.educationLevels.items},
      genderTypes: {items: this.props.genderTypes.items},
      ethnicityTypes: this.props.ethnicityTypes,
      languageTypes: {items: this.props.languageTypes.items},
      stateTypes: {items: this.props.stateTypes.items}
    }
  }

  render () {
    return (
      <div className='card-body'>
        <div className='row'>
          <form>
            <DropDownField gridClassName='col-md-4'
              selectClassName={'reusable-select'}
              value={this.state.educationLevels.id}
              optionList={this.state.educationLevels.items}
              label={'Highest Level of Education'}
              onChange={(event, id) => this.onChange(event.target.value, (''))}/>

            <InputComponent gridClassName='col-md-4' id='dobId' value={this.props.date_of_birth}
              label='Date of Birth' placeholder=''
              type={'text'} onChange={(event) => this.onChange(event.target.value)} />

            <DropDownField gridClassName='col-md-4'
              selectClassName={'reusable-select'}
              value={this.state.genderTypes.id}
              optionList={this.state.genderTypes.items}
              label={'Gender'}
              onChange={(event, id) => this.onChange(event.target.value, (''))} />

            <DropDownField gridClassName='col-md-4'
              selectClassName={'reusable-select'}
              value={this.state.ethnicityTypes.id}
              optionList={this.state.ethnicityTypes}
              optionList={this.state.ethnicityTypes}
              label={'Race / Ethnicity'} />

            <InputComponent gridClassName='col-md-4' id='DlId' value={this.props.date_of_birth}
              label='Driver License number' placeholder=''
              type={'text'} onChange={(event) => this.onChange(event.target.value)} />

            <DropDownField gridClassName='col-md-4'
              selectClassName={'reusable-select'}
              value={this.state.stateTypes.id}
              optionList={this.state.stateTypes.items}
              label={'Driver License State'} />

            <InputComponent gridClassName='col-md-4' id='emailId' value={this.props.first_name}
              label='Email Address (optional)' placeholder=''
              type={'text'} onChange={(event) => this.onChange(event.target.value)} />
          </form>
        </div>
      </div>
    )
  }
}
