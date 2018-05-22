import React from 'react'

const FacilityTypeDetails = ({
  value
}) => (
  <div>
    <div>
      <h3>
           FACILITY TYPE : {' ' + value}
      </h3>
    </div>
  </div>
)

FacilityTypeDetails.defaultProps = {
  value: ''
}

export {FacilityTypeDetails}
