import React from 'react'
import PropTypes from 'prop-types'

import {NavLink} from 'react-wood-duck'

const ANavLinks = ({
  hrefPrefix,
  isNavLinkActive,
  handleNavLinkClick,
  showRelationshipBetweenApplicants
}) => {
  return (
    <div>
      <NavLink
        active={isNavLinkActive('#applicants-card')}
        clickHandler={() => handleNavLinkClick('#applicants-card')}
        text='1. Applicant Information'
        href={hrefPrefix + '#applicants-card'} />
      <NavLink
        active={isNavLinkActive('#applicant-residence-card')}
        clickHandler={() => handleNavLinkClick('#applicant-residence-card')}
        text='2. Applicant Residence'
        href={hrefPrefix + '#applicant-residence-card'} />
      {
        showRelationshipBetweenApplicants
          ? <NavLink
            active={isNavLinkActive('#relationship-between-applicants-card')}
            clickHandler={() => handleNavLinkClick('#relationship-between-applicants-card')}
            text='3. Applicant Relationship'
            href={hrefPrefix + '#relationship-between-applicants-card'} />
          : null
      }
      <NavLink
        active={isNavLinkActive('#minor-child-card')}
        clickHandler={() => handleNavLinkClick('#minor-child-card')}
        text='4. Minor Children'
        href={hrefPrefix + '#minor-child-card'} />
      <NavLink
        active={isNavLinkActive('#other-adults-card')}
        clickHandler={() => handleNavLinkClick('#other-adults-card')}
        text='5. Other Adults'
        href={hrefPrefix + '#other-adults-card'} />
      <NavLink
        active={isNavLinkActive('#marital-history-card')}
        clickHandler={() => handleNavLinkClick('#marital-history-card')}
        text='6. Marital History'
        href={hrefPrefix + '#marital-history-card'} />
      <NavLink
        active={isNavLinkActive('#child-desired-card')}
        clickHandler={() => handleNavLinkClick('#child-desired-card')}
        text='7. Child Desired'
        href={hrefPrefix + '#child-desired-card'} />
      <NavLink
        active={isNavLinkActive('#foster-care-card')}
        clickHandler={() => handleNavLinkClick('#foster-care-card')}
        text='8. Foster Care History'
        href={hrefPrefix + '#foster-care-card'} />
      <NavLink
        active={isNavLinkActive('#reference-card')}
        clickHandler={() => handleNavLinkClick('#reference-card')}
        text='9. References'
        href={hrefPrefix + '#reference-card'} />
    </div>
  )
}

ANavLinks.propTypes = {
  isNavLinkActive: PropTypes.func,
  handleNavLinkClick: PropTypes.func,
  showRelationshipBetweenApplicants: PropTypes.bool
}

ANavLinks.defaultProps = {
  hrefPrefix: ''
}
export default ANavLinks
