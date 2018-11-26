import React from 'react'
import PropTypes from 'prop-types'

import {NavLink} from 'react-wood-duck'

const ResidingAdultLinks = ({
  residingAdults,
  clickHandler,
  hrefPrefix,
  idSuffix,
  isNavLinkActive
}) => {
  const indexes = residingAdults.indexes
  residingAdults = residingAdults.adults
  return (
    residingAdults.map((residingAdult, index) => {
      const href = '#ResidingAdult' + indexes[index] + '-tracking-card'
      return (
        <div key={index}>
          <NavLink
            key={index}
            text={residingAdult.person_name}
            clickHandler={() => clickHandler(href)}
            href={hrefPrefix + href}
            preIcon='fa fa-user'
            active={isNavLinkActive(href)} />
        </div>
      )
    })
  )
}

ResidingAdultLinks.propTypes = {
}

ResidingAdultLinks.defaultProps = {
  hrefPrefix: '',
  isNavLinkActive: () => false
}
export default ResidingAdultLinks
