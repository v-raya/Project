import React from 'react'
import PropTypes from 'prop-types'

import {NavLink} from 'react-wood-duck'

const RegularAdultLinks = ({
  regularAdults,
  clickHandler,
  hrefPrefix,
  idSuffix
}) => {
  let indexes = regularAdults.indexes
  regularAdults = regularAdults.adults
  return (
    regularAdults.map((regularAdult, index) => {
      return (
        <div key={index}>
          <NavLink
            key={index}
            text={regularAdult.person_name}
            clickHandler={() => clickHandler('#PresentAdult' + indexes[index] + '-tracking-card')}
            href={hrefPrefix + '#PresentAdult' + indexes[index] + '-tracking-card'}
            preIcon='fa fa-user' />
        </div>
      )
    })
  )
}

RegularAdultLinks.propTypes = {
}

RegularAdultLinks.defaultProps = {
  hrefPrefix: ''
}
export default RegularAdultLinks
