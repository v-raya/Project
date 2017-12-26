import React from 'react'
import {InputComponent} from 'components/common/inputFields'
import PropTypes from 'prop-types'

const DesiredChildRelationships = ({
  index,
  child,
  applicants,
  setParentState
}) => (
  <div className='col-md-12'>
    <div className='card-header'>Child's Relationship to Applicant</div>
    {/*
    <InputComponent gridClassName='col-md-4' id='relationship_to_applicant'
      label='Realtionship to Applicant' placeholder=''
      type='text' onChange={(event) => this.props.setParentState('relationship_to_applicant',
        event.target.value, this.props.index)} />
    */}
  </div>
)

DesiredChildRelationships.propTypes = {
  index: PropTypes.number,
  applicants: PropTypes.array,
  child: PropTypes.object,
  setParentState: PropTypes.func
}

DesiredChildRelationships.defaultProps = {
  index: 0
}

export default DesiredChildRelationships
