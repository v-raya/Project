import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import TrackFacilityDocs from './trackFacilityDocs'
import TrackPeopleDocs from './trackPeopleDocs'

export default class TrackingDocument extends React.Component {
  render () {
    return (
      <div className='rfa01a-list'>
        <div className='tracking-card-header'>
          <h3>{this.props.facilityName + ' Family RFA Documents'}</h3>
        </div>
        <TrackFacilityDocs
          setParentState={this.props.setParentState}
          trackingDocuments={this.props.trackingDocuments.facility_documents}
          editMode={this.props.editMode} />
        <div className='tracking-card-header people_documents'>
          <h3>{'Applicant: ' + this.props.facilityName + ' RFA Documents'}</h3>
        </div>

        {
          <TrackPeopleDocs
            setParentState={this.props.setPeopleDocumentsState}
            trackingDocuments={this.props.trackingDocuments}
            editMode={this.props.editMode}
          />
        }

        {/* <div className='people_documents'>
          {
            peopleDocuments.map((docs, index) => {
              return (
                <TrackPeopleDocs
                  key={index}
                  trackingDocuments={docs}
                />
              )
            })
          }
        </div> */}
        {/* </div> */}
      </div>
    )
  }
}

TrackingDocument.defaultProps = {
}
