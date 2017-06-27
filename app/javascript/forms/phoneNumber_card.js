import React from 'react'
import {PhoneNumberField} from '../common/phoneNumberField'
import {InputComponent} from '../common/inputFields';
import {DropDownField} from '../common/dropDownField';

export default class PhoneComponent extends React.Component {
  constructor(props) {
    super(props);
    this.addCard = this.addCard.bind(this);
    this.removeCard = this.removeCard.bind(this)
    this.state = {
      phoneComponents : [],
      "insert" : true,
      phoneComponentValue : 1
    }
    this.state.phoneComponents.push(<PhoneNumberField {... this} id={this.state.phoneComponentValue} key={this.state.phoneComponentValue}  />)
  }
  removeCard (value) {
    var phoneCards = this.state.phoneComponents;
    var index = phoneCards.indexOf(value);
    phoneCards.splice(index, 1)
    this.setState({
      phoneCards : phoneCards
    })
  }
  getInitialState () {
    this.state.phoneComponents = (<PhoneNumberField />)
  }
  addCard (event) {
    this.setState({
      'insert' : true
    })
    if(this.state.insert) {
      this.state.phoneComponentValue+=1;
      this.state.phoneComponents.push(<PhoneNumberField {... this} id={this.state.phoneComponentValue} key={this.state.phoneComponentValue} />);
    }
  }
	render () {
		return (
			<div className="card-body">
        {this.state.phoneComponents}
        <div className="text-center">
          <button onClick={this.addCard} className="btn btn-default">Add another Number +</button>
        </div>
      </div>
		)
	}
}