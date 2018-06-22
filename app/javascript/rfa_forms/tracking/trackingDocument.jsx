import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import TrackFaciltyDocs from './trackFaciltyDocs'
import TrackPeopleDocs from './trackPeopleDocs'

export default class TrackingDocument extends React.Component {
  render () {
    return (
      <div className='rfa01a-list'>
        <div className='tracking-card-header'>
          <h3>{this.props.facilityName + ' Family RFA Documents'}</h3>
        </div>
        <TrackFaciltyDocs
          setParentState={this.props.setParentState}
          trackingDocuments={this.props.trackingDocuments.facility_documents}
          editMode={this.props.editMode} />
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
