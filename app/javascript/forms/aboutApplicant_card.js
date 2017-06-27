import React from 'react';
import {InputComponent} from '../common/inputFields'
import {DropDownField} from '../common/dropDownField'

export default class AboutApplicant extends React.Component {
  render () {
    const applicantTypes = {
      "items": [
        {
          "id": 1,
          "value": "Alias"
        }
      ]
    }
    return (
      <div className='card-body'>
        <div className="row">
          <form>
            <DropDownField gridClassName='col-md-4'
                           selectClassName={'reusable-select'}
                           optionList={applicantTypes.items}
                           label={"Highest Level"} />
            <DropDownField gridClassName='col-md-4'
                           selectClassName={'reusable-select'}
                           optionList={applicantTypes.items}
                           label={"Date of Birth"} />
            <DropDownField gridClassName='col-md-4'
                           selectClassName={'reusable-select'}
                           optionList={applicantTypes.items}
                           label={"Gender"} />
            <DropDownField gridClassName='col-md-4'
                           selectClassName={'reusable-select'}
                           optionList={applicantTypes.items}
                           label={"Race / Ethnicity"} />
            <DropDownField gridClassName='col-md-4'
                           selectClassName={'reusable-select'}
                           optionList={applicantTypes.items}
                           label={"Driver License Number"} />
            <DropDownField gridClassName='col-md-4'
                           selectClassName={'reusable-select'}
                           optionList={applicantTypes.items}
                           label={"Driver License State"} />
            <InputComponent gridClassName='col-md-4' id='emailId' value={this.props.first_name}
                            label='Email Address (optional)' placeholder=''
                            type={'text'} onChange={(event) => this.onChange(event.target.value)} />
          </form>
        </div>
      </div>
    )
  }
}