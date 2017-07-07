import React from 'react'
import {OtherAdultsCardField} from '../common/OtherAdultsCardField'

export default class OtherAdultsCard extends React.Component {
  constructor (props) {
    super(props)
    this.addCard = this.addCard.bind(this)
    this.removeCard = this.removeCard.bind(this)
    this.state = {
      otherAdultsComponents: [],
      'insert': true,
      otherAdultsComponentValue: 1
    }
    this.state.otherAdultsComponents.push(<OtherAdultsCardField {... this} id={this.state.otherAdultsComponentValue} key={this.state.otherAdultsComponentValue} />)
  }

  getInitialState () {
    this.state.otherAdultsComponents = (<OtherAdultsCardField />)
  }

  addCard (event) {
    this.setState({
      'insert': true
    })
    if (this.state.insert) {
      this.state.otherAdultsComponentValue += 1
      this.state.otherAdultsComponents.push(<OtherAdultsCardField {... this} id={this.state.otherAdultsComponentValue} key={this.state.otherAdultsComponentValue} />)
    }
  }

  removeCard (value) {
    var otherAdultsCards = this.state.otherAdultsComponents
    var index = otherAdultsCards.indexOf(value)
    otherAdultsCards.splice(index, 1)
    this.setState({
      otherAdultsCards: otherAdultsCards
    })
  }

  render () {
    return (
      <div className='card-body'>
        {this.state.otherAdultsComponents}
        <div className='text-center'>
          <button onClick={this.addCard} className='btn btn-default'>Add another Adult +</button>
        </div>
      </div>
    )
  }
}
