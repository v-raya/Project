import Immutable from 'immutable'
import React from 'react'
import Collapsible from 'react-collapsible'
import Affix from 'react-overlays/lib/AutoAffix'
import PropTypes from 'prop-types'
import RfaSideBarTemplate from './rfaSideBarTemplate'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'
import {NavLink} from 'react-wood-duck'

const B01SideBar = ({
  isNavLinkActive,
  applicants,
  otherAdults,
  rfa01aApplicationId,
  handleNavLinkClick
}) => {
  return (
    <RfaSideBarTemplate label='RFA 01 B' idPrefix='rfa01b'>
      {
        applicants && applicants.map((applicant, index) => {
          return (
            <div key={`applicant_id${applicant.id}index${index}`}
              id={`rfa01b.Applicant${applicant.id}`}>
              {applicant.id
                ? (applicant.rfa1b_form && applicant.rfa1b_form.id
                  ? <NavLink
                    active={isNavLinkActive(applicant.rfa1b_form.id)}
                    clickHandler={() => handleNavLinkClick(applicant.rfa1b_form.id)}
                    text={`${applicant.first_name} ${applicant.last_name}`}
                    href={urlPrefixHelper(`/rfa/b01/${applicant.rfa1b_form.id
                    }/edit?application_id=${rfa01aApplicationId}`)} />
                  : <NavLink
                    active={isNavLinkActive(applicant.id)}
                    clickHandler={() => handleNavLinkClick(applicant.id)}
                    text={`${applicant.first_name} ${applicant.last_name}`}
                    href={urlPrefixHelper(`/rfa/b01/?application_id=${
                      rfa01aApplicationId}&adult_id=${applicant.id}&api_url_path=applicants`)} />)
                : null
              }
            </div>
          )
        })
      }{
        otherAdults && otherAdults.map((otherAdult, index) => {
          return (
            <div key={`other_adult_id${otherAdult.id}index${index}`} >
              {otherAdult.id
                ? (otherAdult.rfa1b_form && otherAdult.rfa1b_form.id
                  ? <NavLink
                    active={isNavLinkActive(otherAdult.rfa1b_form.id)}
                    clickHandler={() => handleNavLinkClick(otherAdult)}
                    text={`${otherAdult.first_name} ${otherAdult.last_name}`}
                    href={urlPrefixHelper(`/rfa/b01/${otherAdult.rfa1b_form.id}/edit?application_id=${rfa01aApplicationId}`)} />
                  : <NavLink
                    active={isNavLinkActive(otherAdult.id)}
                    clickHandler={() => handleNavLinkClick(otherAdult.id)}
                    text={`${otherAdult.first_name} ${otherAdult.last_name}`}
                    href={urlPrefixHelper(`/rfa/b01/?application_id=${rfa01aApplicationId}&adult_id=${otherAdult.id}&api_url_path=other-adults`)} />)
                : null
              }
            </div>
          )
        })
      }
    </RfaSideBarTemplate>
  )
}

B01SideBar.propTypes = {
  isNavLinkActive: PropTypes.func,
  handleNavLinkClick: PropTypes.func,
  applicants: PropTypes.arrayOf(PropTypes.object),
  otherAdults: PropTypes.arrayOf(PropTypes.object)
}

B01SideBar.defaultProps = {
  applicants: [],
  otherAdults: []
}
export default B01SideBar
