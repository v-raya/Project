import Immutable from 'immutable'
import React from 'react'
import Collapsible from 'react-collapsible'
import Affix from 'react-overlays/lib/AutoAffix'
import PropTypes from 'prop-types'
import RfaSideBarTemplate from './rfaSideBarTemplate'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'
import ANavLinks from './aNavLinks'

const A01SideBar = ({
  isNavLinkActive,
  handleNavLinkClick,
  onRfa01AForm,
  rfa01aApplicationId,
  showRelationshipBetweenApplicants
}) => {
  return (

    <RfaSideBarTemplate label='RFA 01 A' idPrefix='rfa01a'>
      {onRfa01AForm
        ? <ANavLinks
          hrefPrefix=''
          isNavLinkActive={isNavLinkActive}
          handleNavLinkClick={handleNavLinkClick}
          showRelationshipBetweenApplicants={showRelationshipBetweenApplicants} />
        : <ANavLinks
          hrefPrefix={urlPrefixHelper('/rfa/a01/' + rfa01aApplicationId + '/edit')}
          isNavLinkActive={isNavLinkActive}
          handleNavLinkClick={handleNavLinkClick}
          showRelationshipBetweenApplicants={showRelationshipBetweenApplicants} />
      }
    </RfaSideBarTemplate>
  )
}

A01SideBar.propTypes = {
  isNavLinkActive: PropTypes.func,
  handleNavLinkClick: PropTypes.func,
  showRelationshipBetweenApplicants: PropTypes.bool
}

A01SideBar.defaultProps = {
  onRfa01AForm: false
}
export default A01SideBar
