import React from 'react'
import PropTypes from 'prop-types'

import {NavLink} from 'react-wood-duck'

const RegularAdultLinks = ({
  regularAdults,
  clickHandler,
  hrefPrefix,
  idSuffix,
  isNavLinkActive
}) => {
  let indexes = regularAdults.indexes
  regularAdults = regularAdults.adults
  return (
    regularAdults.map((regularAdult, index) => {
      let href = '#PresentAdult' + indexes[index] + '-tracking-card'
      return (
        <div key={index}>
          <NavLink
            key={index}
            text={regularAdult.person_name}
            clickHandler={() => clickHandler(href)}
            href={hrefPrefix + href}
            preIcon='fa fa-user'
            active={isNavLinkActive(href)} />
        </div>
      )
    })
  )
}

RegularAdultLinks.propTypes = {
}

RegularAdultLinks.defaultProps = {
  hrefPrefix: '',
  isNavLinkActive: () => false
}
export default RegularAdultLinks
