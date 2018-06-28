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

export const APPLICANT_PERSON_TYPE = 'Applicant'
export const RESIDING_PERSON_TYPE = 'Residing Adult'
export const REGULAR_PERSON_TYPE = 'Present Adult'

export default class TrackingSideBar extends React.Component {
  render () {
    let peopleDocs = this.props.tracking.people_documents

    return (
      <div className='nav-menu col-sm-12 pull-right'>
        <Affix
          viewportOffsetTop={35}
          bottomStyle={{position: 'fixed', top: 60}}
          affixStyle={{top: 60}}>
          <div className='tracking-side-bar' aria-label='Side Bar'>
            <NavLinks>
              <div className='tracking-sidenav-title'>
                <NavLink
                  text={this.props.facilityName + ' Family RFA Documents'}
                  clickHandler={() => this.props.handleHrefClick('#facility-card')}
                  href={'#facility-card'} />
              </div>
              <div className='tracking-sidenav-label'>Applicants</div>

              <ApplicantSideBar
                clickHandler={this.props.handleHrefClick}
                hrefPrefix=''
                applicants={{apps: peopleDocs.filter(element =>
                  element.person_type.indexOf(APPLICANT_PERSON_TYPE) === 0),
                indexes: peopleDocs.reduce((a, e, i) => (e.person_type === APPLICANT_PERSON_TYPE)
                  ? a.concat(i) : a, [])}} />
              <div className='tracking-sidenav-label'>Adults Residing in the Home</div>
              <ResidingAdultSideBar
                clickHandler={this.props.handleHrefClick}
                hrefPrefix=''
                residingAdults={{adults: peopleDocs.filter(element =>
                  element.person_type.indexOf(RESIDING_PERSON_TYPE) === 0),
                indexes: peopleDocs.reduce((a, e, i) => (e.person_type === RESIDING_PERSON_TYPE)
                  ? a.concat(i) : a, [])}} />

              <div className='tracking-sidenav-label'>Adults Regularly Present</div>
              <RegularAdultSideBar
                clickHandler={this.props.handleHrefClick}
                hrefPrefix=''
                regularAdults={{adults: peopleDocs.filter(element =>
                  element.person_type.indexOf(REGULAR_PERSON_TYPE) === 0),
                indexes: peopleDocs.reduce((a, e, i) => (e.person_type === REGULAR_PERSON_TYPE)
                  ? a.concat(i) : a, [])}} />

            </NavLinks>
          </div>
        </Affix>
      </div>
    )
  }
}
