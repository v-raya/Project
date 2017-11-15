import React from 'react'
import Immutable from 'immutable'
import PropTypes from 'prop-types'
import DesiredChildCard from 'rfa_forms/rfa01c_edit_view/desiredChildcard.jsx'
import {getFocusClassName, addCardAsJS, removeCard} from 'helpers/cardsHelper.jsx'

const blankIdentifiedChild = Object.freeze({
  first_name: '',
  middle_name: '',
  last_name: '',
  name_suffix: null,
  date_of_birth: '',
  gender: null,
  county_of_jurisdiction: null,
  date_of_placement: '',
  relationship_to_applicants: null,
  // relationship_to_applicants: [
  //   {
  //     applicant_id: '',
  //     relationship_to_applicant: null
  //   }
  // ],
  school_grade: null,
  school_name: '',
  school_address: {
    street_address: '',
    zip: '',
    city: '',
    state: null,
    type: {
      value: 'Mailing',
      id: 3
    }
  }
})

// const blankValues = Object.freeze({
//   id: 0,
//   application_county: null,
//   child_identified: true,
//   child_in_home: true,
//   identified_children: [blankIdentifiedChild]
// })

export default class ChildDesiredGroup extends React.Component {
  constructor (props) {
    super(props)
    this.setState = this.setState.bind(this)
    this.addCard = this.addCard.bind(this)
    this.clickClose = this.clickClose.bind(this)
  }

  setState (key, value, index) {
    let newData = Immutable.fromJS(this.props.identifiedChildren)
    newData = newData.update(index, x => x.set(key, value))
    this.props.setParentState('identified_children', newData.toJS())
  }

  addCard (event) {
    this.props.setParentState('identified_children', addCardAsJS(this.props.identifiedChildren, blankIdentifiedChild))
  }

  clickClose (cardIndex) {
    this.props.setParentState('identified_children',
      removeCard(this.props.identifiedChildren, cardIndex, blankIdentifiedChild))
  }

  render () {
    return (
      <div className='desired_child_card'>
        <div id='DesiredChildSection' onClick={() => this.props.setFocusState('ChildDesiredMain')}
          className={this.props.getFocusClassName('ChildDesiredMain ') + ' ' + 'card phone-section double-gap-top'}>
          <div className='card-header'><span>Child Identification</span></div>

          <div className='card-body'>
            {
              this.props.identifiedChildren.map((child, index) => {
                const idPrefix = 'desiredChild[' + index + '].'
                return (

                  <div className='row' key={index} >
                    {(index > 0) && <span onClick={() => this.clickClose(index)} className='pull-right glyphicon glyphicon-remove' />}

                    <DesiredChildCard
                      key={index}
                      index={index}
                      idPrefix={idPrefix}
                      setParentState={this.setState}
                      desiredChild={child}
                      genderTypes={this.props.genderTypes}
                      suffixTypes={this.props.suffixTypes}
                      countyTypes={this.props.countyTypes}
                      stateTypes={this.props.stateTypes}
                      validator={this.props.validator}
                      errors={this.props.errors}
                      schoolGrades={this.props.schoolGrades}/>
                  </div>
                )
              })
            }
          </div>
          <div className='text-center'>
            <button onClick={this.addCard} className='btn btn-default'>Add another child +</button>
          </div>
        </div>
      </div>
    )
  }
}

ChildDesiredGroup.propTypes = {
  identifiedChildren: PropTypes.array.isRequired,
  setParentState: PropTypes.func.isRequired,
  schoolGrades: PropTypes.array.isRequired,
  countyTypes: PropTypes.array.isRequired,
  suffixTypes: PropTypes.array.isRequired
}

ChildDesiredGroup.defaultProps = {
  identifiedChildren: [blankIdentifiedChild]
}
