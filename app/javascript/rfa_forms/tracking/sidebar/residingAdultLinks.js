import React from 'react'
import PropTypes from 'prop-types'

import {NavLink} from 'react-wood-duck'

const ResidingAdultLinks = ({
  residingAdults,
  clickHandler,
  hrefPrefix
}) => {
  let indexes = residingAdults.indexes
  residingAdults = residingAdults.adults
  return (
    residingAdults.map((residingAdult, index) => {
      return (
        <div key={index}>
          <NavLink
            key={index}
            text={residingAdult.person_name}
            clickHandler={() => clickHandler('#ResidingAdult' + indexes[index] + '-tracking-card')}
            href={hrefPrefix + '#ResidingAdult' + indexes[index] + '-tracking-card'}
            preIcon='fa fa-user' />
        </div>
      )
    })
  )
}

ResidingAdultLinks.propTypes = {
}

ResidingAdultLinks.defaultProps = {
  hrefPrefix: ''
}
export default ResidingAdultLinks
