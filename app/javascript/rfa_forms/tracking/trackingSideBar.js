import Immutable from 'immutable'
import React from 'react'
import Collapsible from 'react-collapsible'
import Affix from 'react-overlays/lib/AutoAffix'
import PropTypes from 'prop-types'
import {NavLinks, NavLink} from 'react-wood-duck'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'
import ApplicantSideBar from './sidebar/applicantLinks'
import ResidingAdultSideBar from './sidebar/residingAdultLinks'
import RegularAdultSideBar from './sidebar/regularAdultLinks'
import TrackingTable from './trackingTable'

export const APPLICANT_PERSON_TYPE = 'Applicant'
export const RESIDING_PERSON_TYPE = 'Residing Adult'
export const REGULAR_PERSON_TYPE = 'Present Adult'

export default class TrackingSideBar extends React.Component {
  render () {
    const people = this.props.people
    const titleSuffix = this.props.titleSuffix
    return (
      <div className='nav-menu col-sm-12 pull-right'>
        <Affix
          viewportOffsetTop={35}
          bottomStyle={{position: 'fixed', top: 120}}
          affixStyle={{top: 120}}>
          <div className='tracking-side-bar' aria-label='Side Bar'>
            <NavLinks>
              <div className='tracking-sidenav-title'>
                <NavLink
                  text={`${this.props.facilityName} ${titleSuffix}`}
                  clickHandler={() => this.props.handleHrefClick('#facility-card')}
                  href={'#facility-card'} />
              </div>
              <div className='tracking-sidenav-label'>Applicants</div>

              <ApplicantSideBar
                clickHandler={this.props.handleHrefClick}
                hrefPrefix=''
                applicants={{apps: people.filter(element =>
                  element.person_type.indexOf(APPLICANT_PERSON_TYPE) === 0),
                indexes: people.reduce((a, e, i) => (e.person_type === APPLICANT_PERSON_TYPE)
                  ? a.concat(i) : a, [])}}
                isNavLinkActive={this.props.isNavLinkActive} />
              <div className='tracking-sidenav-label'>Adults Residing in the Home</div>
              <ResidingAdultSideBar
                clickHandler={this.props.handleHrefClick}
                hrefPrefix=''
                residingAdults={{adults: people.filter(element =>
                  element.person_type.indexOf(RESIDING_PERSON_TYPE) === 0),
                indexes: people.reduce((a, e, i) => (e.person_type === RESIDING_PERSON_TYPE)
                  ? a.concat(i) : a, [])}}
                isNavLinkActive={this.props.isNavLinkActive} />

              <div className='tracking-sidenav-label'>Adults Regularly Present</div>
              <RegularAdultSideBar
                clickHandler={this.props.handleHrefClick}
                hrefPrefix=''
                regularAdults={{adults: people.filter(element =>
                  element.person_type.indexOf(REGULAR_PERSON_TYPE) === 0),
                indexes: people.reduce((a, e, i) => (e.person_type === REGULAR_PERSON_TYPE)
                  ? a.concat(i) : a, [])}}
                isNavLinkActive={this.props.isNavLinkActive} />
            </NavLinks>
          </div>
        </Affix>
      </div>
    )
  }
}

TrackingSideBar.defaultProps = {
  titleSuffix: ''
}
