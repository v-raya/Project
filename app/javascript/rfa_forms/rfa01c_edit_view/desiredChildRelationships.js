import React from 'react'
import {InputComponent} from 'components/common/inputFields'
import {checkRelationshipFreeformPresence} from 'helpers/cardsHelper.jsx'
import PropTypes from 'prop-types'

const DesiredChildRelationships = ({
  index,
  child,
  applicants,
  handleRelationshipChange
}) => (
  <div className='row'>
    <div className='child-name-section child-applicant'><span className='row-margin'>Child's Relationship to Applicant</span></div>
    <div>
      {
        applicants && applicants.map((applicant, subIndex) => {
          return (
            <div className='col-md-12' key={'desiredChildRelationships' + index + 'child' + subIndex} >
              <InputComponent
                gridClassName='col-md-4'
                id={'relationship_to_applicant' + index + 'child' + subIndex}
                value={checkRelationshipFreeformPresence(child)}
                label={'Relationship to Applicant ' + applicant.first_name + ' ' + applicant.last_name}
                placeholder=''
                onChange={(event) => handleRelationshipChange(applicant, event.target.value, index, subIndex)} />
            </div>
          )
        })
      }
    </div>
  </div>
)

DesiredChildRelationships.propTypes = {
  index: PropTypes.number,
  applicants: PropTypes.array,
  child: PropTypes.object,
  handleRelationshipChange: PropTypes.func
}

DesiredChildRelationships.defaultProps = {
  index: 0
}

export default DesiredChildRelationships
