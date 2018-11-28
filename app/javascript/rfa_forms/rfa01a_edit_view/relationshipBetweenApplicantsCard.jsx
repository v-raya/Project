import React from 'react'
import Immutable from 'immutable'
import RelationshipBetweenApplicantsFields from './relationshipBetweenApplicantsFields'
import {getFocusClassName} from 'helpers/cardsHelper.jsx'
import {blankRelationshipBetweenApplicantsValues} from 'constants/defaultFields'

export default class RelationshipBetweenApplicantsCard extends React.Component {
  constructor (props) {
    super(props)
    this.setState = this.setState.bind(this)
  }

  setState (key, value) {
    let newData = Immutable.fromJS(this.props.relationshipBetweenApplicants)
    if (key === 'relationship_type') {
      newData = Immutable.fromJS(blankRelationshipBetweenApplicantsValues)
    }
    newData = newData.set(key, value)
    this.props.setParentState('applicants_relationship', newData.toJS())
  }

  render () {
    const data = this.props.relationshipBetweenApplicants
    const idPrefix = 'relationshipBetweenApplicants.'

    return (
      <div className='relationship_between_applicants_card'>
        <div id='RelationshipBetweenApplicantsCardSection' onClick={() => this.props.setFocusState('RelationshipBetweenApplicantsCard')}
          className={`${this.props.getFocusClassName('RelationshipBetweenApplicantsCard')} ` + `card phone-section double-gap-top active-bar`}
          role='button' aria-hidden>
          <div className='card-header'><span>Relationships</span></div>
          <div className='card-body'>
            <div className='row'>
              <RelationshipBetweenApplicantsFields
                idPrefix={idPrefix}
                relationshipBetweenApplicants={this.props.relationshipBetweenApplicants}
                relationshipTypes={this.props.relationshipTypes}
                RelationshipBetweenApplicantsCardSection={data}
                applicants={this.props.applicants}
                stateTypes={this.props.stateTypes}
                setParentState={this.setState}
                validator={this.props.validator}
                errors={this.props.errors}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

RelationshipBetweenApplicantsCard.defaultProps = {
  relationshipBetweenApplicants: blankRelationshipBetweenApplicantsValues,
  errors: {}
}
