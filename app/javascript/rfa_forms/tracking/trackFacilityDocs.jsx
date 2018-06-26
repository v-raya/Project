import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import _ from 'lodash'
import TrackingTable from './trackingTable'
import FamilyDocRow from './tableRows/familyDocRow'
import TaskAndTrainingDocRow from './tableRows/taskAndTrainingDocRow'
import AssessmentsDocRow from './tableRows/assessmentsDocRow'
import CardsGroupLayout from 'components/common/cardsGroupLayout.js'

export default class TrackFacilityDocs extends React.Component {
  constructor (props) {
    super(props)
    this.handleAssessmentDocsChange = this.handleAssessmentDocsChange.bind(this)
    this.handleFamilyDocumentsChange = this.handleFamilyDocumentsChange.bind(this)
    this.handleTaskAndTrainingChange = this.handleTaskAndTrainingChange.bind(this)
  }

  handleFamilyDocumentsChange (key, value, index) {
    let familyDocuments = Immutable.fromJS(this.props.trackingDocuments.family_documents)
    let immutableFamilyDoc = Immutable.fromJS(this.props.trackingDocuments.family_documents.items[index])
    immutableFamilyDoc = immutableFamilyDoc.set(key, value)
    familyDocuments = familyDocuments.setIn(['items', index], immutableFamilyDoc)
    this.props.setParentState('family_documents', familyDocuments.toJS())
  }

  handleAssessmentDocsChange (key, value, index) {
    let assessments = Immutable.fromJS(this.props.trackingDocuments.assessments)
    let immutableAssessment = Immutable.fromJS(this.props.trackingDocuments.assessments.items[index])
    immutableAssessment = immutableAssessment.set(key, value)
    assessments = assessments.setIn(['items', index], immutableAssessment)
    this.props.setParentState('assessments', assessments.toJS())
  }

  handleTaskAndTrainingChange (key, value, index) {
    let tasksAndTrainings = Immutable.fromJS(this.props.trackingDocuments.tasks_and_trainings)
    let immutableTask = Immutable.fromJS(this.props.trackingDocuments.tasks_and_trainings.items[index])
    immutableTask = immutableTask.set(key, value)
    tasksAndTrainings = tasksAndTrainings.setIn(['items', index], immutableTask)
    this.props.setParentState('tasks_and_trainings', tasksAndTrainings.toJS())
  }

  render () {
    const facilityDocuments = this.props.trackingDocuments
    const familyDocuments = facilityDocuments.family_documents
    const assessmentDocuments = facilityDocuments.assessments
    const taskAndTrainingDocuments = facilityDocuments.tasks_and_trainings

    return (
      <div className='tracking-card'>
        <div className='tracking-card-header'>
          <h3>{this.props.facilityName + ' Family RFA Documents'}</h3>
        </div>
        <TrackingTable
          colHeaders={['Family Documents', '', 'Received', 'Notes']}
          rowsComponent={
            <FamilyDocRow
              editMode={this.props.editMode}
              handleChange={this.handleFamilyDocumentsChange}
              trackingDocuments={familyDocuments} />
          } />
        <TrackingTable
          colHeaders={['Tasks and Trainings', '', 'Completed', 'Notes']}
          rowsComponent={
            <TaskAndTrainingDocRow
              handleChange={this.handleTaskAndTrainingChange}
              trackingDocuments={taskAndTrainingDocuments}
              editMode={this.props.editMode} />
          } />
        <TrackingTable
          colHeaders={['Assessments', 'Submitted', 'Approved', 'Notes']}
          rowsComponent={
            <AssessmentsDocRow
              handleChange={this.handleAssessmentDocsChange}
              trackingDocuments={assessmentDocuments}
              editMode={this.props.editMode} />
          } />
      </div>
    )
  }
}

TrackFacilityDocs.defaultProps = {
  trackingDocuments: []
}
