import React from 'react'
import PropTypes from 'prop-types'

import {NavLink} from 'react-wood-duck'

const ApplicantLinks = ({
  applicants,
  clickHandler,
  hrefPrefix,
  idSuffix,
  isNavLinkActive
}) => {
  const indexes = applicants.indexes
  applicants = applicants.apps
  return (
    applicants.map((applicant, index) => {
      const href = `#Applicant${indexes[index]}-tracking-card`
      return (
        <div key={index}>
          <NavLink
            key={index}
            text={applicant.person_name}
            clickHandler={() => clickHandler(href)}
            href={hrefPrefix + href}
            preIcon='fa fa-user'
            active={isNavLinkActive(href)}
          />
        </div>
      )
    })

  )
}
ApplicantLinks.propTypes = {

}

ApplicantLinks.defaultProps = {
  hrefPrefix: '',
  isNavLinkActive: () => false
}
export default ApplicantLinks
