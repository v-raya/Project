import React from 'react'

const FacilityTypeDetails = ({
  value
}) => (
  <div>
    <h3>
           FACILITY TYPE : {' ' + value}
    </h3>
  </div>
)

FacilityTypeDetails.defaultProps = {
  value: ''
}

export {FacilityTypeDetails}
