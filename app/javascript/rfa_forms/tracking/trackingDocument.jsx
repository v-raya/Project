import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import TrackFaciltyDocs from './trackFaciltyDocs'
import TrackPeopleDocs from './trackPeopleDocs'

export default class TrackingDocument extends React.Component {
  render () {
    return (
      <div className='tracking-edit'>
        <div className='facility_documents'>
          <TrackFaciltyDocs
            trackingDocuments={this.props.trackingDocuments.facility_documents}
            editMode={this.props.editMode}
          />
        </div>
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
      </div>
    )
  }
}

TrackingDocument.defaultProps = {
}
