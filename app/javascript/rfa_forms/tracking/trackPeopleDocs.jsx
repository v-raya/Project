import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import _ from 'lodash'
import TrackingTable from './trackingTable'
import IndividualDocRow from './tableRows/individualDocRow.js'
import ClearancesDocRow from './tableRows/clearancesDocRow.js'
import TrainingDocRow from './tableRows/trainingDocRow.js'
import ScrollSpy from 'components/common/scrollSpy'

export default class TrackPeopleDocs extends React.Component {
  constructor (props) {
    super(props)
    this.handleIndividualDocRowChange = this.handleIndividualDocRowChange.bind(this)
    this.handleClearancesDocsChange = this.handleClearancesDocsChange.bind(this)
    this.handleTrainingsDocsChange = this.handleTrainingsDocsChange.bind(this)
  }

  handleIndividualDocRowChange (key, value, peopleIndex, itemIndex) {
    const trackingDocProps = this.props.trackingDocuments.people_documents

    let individualDocuments = Immutable.fromJS(trackingDocProps[peopleIndex].person_documents.individual_documents)
    individualDocuments = individualDocuments.setIn(['items', itemIndex, key], value)

    let personDocs = Immutable.fromJS(trackingDocProps[peopleIndex].person_documents)
    personDocs = personDocs.set('individual_documents', individualDocuments)

    let newPeopleDocuments = Immutable.fromJS(trackingDocProps)
    newPeopleDocuments = newPeopleDocuments.setIn([peopleIndex, 'person_documents'], personDocs)
    this.props.setParentState('people_documents', newPeopleDocuments.toJS())
  }

  handleTrainingsDocsChange (key, value, peopleIndex, itemIndex) {
    const trackingDocProps = this.props.trackingDocuments.people_documents

    let trainingDocuments = Immutable.fromJS(trackingDocProps[peopleIndex].person_documents.trainings)
    trainingDocuments = trainingDocuments.setIn(['items', itemIndex, key], value)

    let trainingDocs = Immutable.fromJS(trackingDocProps[peopleIndex].person_documents)
    trainingDocs = trainingDocs.set('trainings', trainingDocuments)

    let immutableTrainingDoc = Immutable.fromJS(trackingDocProps)
    immutableTrainingDoc = immutableTrainingDoc.setIn([peopleIndex, 'person_documents'], trainingDocs)
    this.props.setParentState('people_documents', immutableTrainingDoc.toJS())
  }

  handleClearancesDocsChange (key, value, peopleIndex, itemIndex) {
    const trackingDocProps = this.props.trackingDocuments.people_documents

    let clearanceDocuments = Immutable.fromJS(trackingDocProps[peopleIndex].person_documents.clearances)
    clearanceDocuments = clearanceDocuments.setIn(['items', itemIndex, key], value)

    let clearanceDocs = Immutable.fromJS(trackingDocProps[peopleIndex].person_documents)
    clearanceDocs = clearanceDocs.set('clearances', clearanceDocuments)

    let immutableClearanceDoc = Immutable.fromJS(trackingDocProps)
    immutableClearanceDoc = immutableClearanceDoc.setIn([peopleIndex, 'person_documents'], clearanceDocs)
    this.props.setParentState('people_documents', immutableClearanceDoc.toJS())
  }

  render () {
    const editMode = this.props.editMode
    const trackingDocuments = this.props.trackingDocuments
    const peopleDocuments = trackingDocuments.people_documents

    return (
      peopleDocuments.map((peopleDoc, peopleIndex) => {
        const hrefId = peopleDoc.person_type.replace(/\s+/g, '') + peopleIndex + '-tracking-card'

        return (
          <div key={peopleIndex} >
            <ScrollSpy onEnter={() => this.props.handleHrefClick('#' + hrefId)}>
              <div className='tracking-card' id={hrefId}>
                <div className='tracking-card-header people_documents'>
                  <h3>{peopleDoc.person_type + ': ' + peopleDoc.person_name + ' RFA Documents'}</h3>
                </div>
                <TrackingTable
                  colHeaders={['Individual Documents', 'Started', 'Completed', 'Notes']}
                  rowsComponent={
                    <IndividualDocRow
                      peopleIndex={peopleIndex}
                      handleChange={this.handleIndividualDocRowChange}
                      individualDocuments={peopleDoc.person_documents.individual_documents}
                      editMode={editMode} />
                  } />
                { peopleDoc.person_documents.trainings && <TrackingTable
                  colHeaders={['Trainings', '', 'Expiration', 'Notes']}
                  rowsComponent={
                    <TrainingDocRow
                      peopleIndex={peopleIndex}
                      handleChange={this.handleTrainingsDocsChange}
                      trainingDocuments={peopleDoc.person_documents.trainings}
                      editMode={editMode} />
                  } />}
                <TrackingTable
                  colHeaders={['Clearances', 'Started', 'Completed', 'Notes']}
                  rowsComponent={
                    <ClearancesDocRow
                      peopleIndex={peopleIndex}
                      handleChange={this.handleClearancesDocsChange}
                      clearanceDocuments={peopleDoc.person_documents.clearances}
                      editMode={editMode} />
                  } />
              </div>
            </ScrollSpy>
          </div>
        )
      }
      )
    )
  }
}

TrackPeopleDocs.defaultProps = {
  peopleDocument: {
    person_documents: {
      individual_documents: null
    }
  }
}
