import React from 'react';
import {NameCardField} from '../common/nameCardField'

export default class NameCard extends React.Component {
  constructor(props) {
    super(props);
    this.addCard = this.addCard.bind(this);
    this.removeCard = this.removeCard.bind(this)
    this.state = {
      nameComponents : [],
      "insert" : true,
      nameComponentValue : 1
    }
    this.state.nameComponents.push(<NameCardField {... this} id={this.state.nameComponentValue} key={this.state.nameComponentValue}  />)
  }
  removeCard (value) {
    var nameCards = this.state.nameComponents;
    var index = nameCards.indexOf(value);
    nameCards.splice(index, 1)
    this.setState({
      nameCards : nameCards
    })
  }
  getInitialState () {
    this.state.nameComponents = (<NameCardField />)
  }
  addCard (event) {
    this.setState({
      'insert' : true
    })
    if(this.state.insert) {
      this.state.nameComponentValue+=1;
      this.state.nameComponents.push(<NameCardField {... this} id={this.state.nameComponentValue} key={this.state.nameComponentValue} />);
    }
  }
  render () {
    return (
      <div className="card-body">
        {this.state.nameComponents}
        <div className="text-center">
          <button onClick={this.addCard} className="btn btn-default">Add another Name +</button>
        </div>
      </div>
    )
  }
}