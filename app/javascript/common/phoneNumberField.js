import React from 'react';
import {InputComponent} from './inputFields'
import {DropDownField} from './dropDownField'
import {CheckboxField} from './checkboxField'


export class PhoneNumberField extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const phoneType = {
      "items": [
        {
          "id": 1,
          "value": "Cell"
        },
        {
          "id": 2,
          "value": "Home"
        },
        {
          "id": 3,
          "value": "Work"
        }
      ]
    }
    return (
      <div className="row list-item">
        <span onClick={() => this.props.removeCard(this.props.id)} className="pull-right glyphicon glyphicon-remove"></span>
        {/*<a onClick={this.removeCard}  className="list-item__a" aria-label="Delete phone number" href="#">*/}
          {/*<i className="fa fa-times"></i>*/}
        {/*</a>*/}
        <form>
          <InputComponent gridClassName='col-md-4' id='firstname'
                          label='Phone Number' placeholder='Enter Phone Number' />
          <DropDownField gridClassName='col-md-4'
                         selectClassName={'reusable-select'}
                         optionList={phoneType.items}
                         label={"Phone Type"} />
          <CheckboxField gridClassName='col-md-4' id='firstname' type={'checkbox'}
                          label='Preferred Contact Number' placeholder='Enter Phone Number' />
          {/*<div className="col-md-12">*/}
            {/*<input type="checkbox" />*/}
            {/*<span>Preferred Contact Number</span>*/}
          {/*</div>*/}
        </form>
      </div>
    )
  }
}
