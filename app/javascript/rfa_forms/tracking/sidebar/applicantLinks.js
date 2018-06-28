import React from 'react'
import PropTypes from 'prop-types'

import {NavLink} from 'react-wood-duck'

const ApplicantLinks = ({
  applicants,
  clickHandler,
  hrefPrefix
}) => {
  let indexes = applicants.indexes
  applicants = applicants.apps
  return (
    applicants.map((applicant, index) => {
      return (
        <div key={index}>
          <NavLink
            key={index}
            text={applicant.person_name}
            clickHandler={() => clickHandler('#Applicant' + indexes[index] + '-tracking-card')}
            href={hrefPrefix + '#Applicant' + indexes[index] + '-tracking-card'}
            preIcon='fa fa-user' />
        </div>
      )
    })

  )
}
ApplicantLinks.propTypes = {

}

ApplicantLinks.defaultProps = {
  hrefPrefix: ''
}
export default ApplicantLinks
