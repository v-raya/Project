import Immutable from 'immutable'
import React from 'react'
import Collapsible from 'react-collapsible'
import Affix from 'react-overlays/lib/AutoAffix'
import PropTypes from 'prop-types'
import RfaSideBarTemplate from './rfaSideBarTemplate'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'
import {NavLink} from 'react-wood-duck'

const C01SideBar = ({
  isNavLinkActive,
  rfa01aApplicationId,
  rfa01cForm,
  childIdentified,
  handleNavLinkClick
}) => {
  return (
    <RfaSideBarTemplate label='RFA 01 C' idPrefix='rfa01c'>
      {// only render  the link to create a c form
        // if a child has already been identified in rfa 01 a
        childIdentified === true
        // if a child has been identified and has been saved, an Id is created
        // so we can link to edit, otherwise we need to create the c form
          ? (rfa01cForm && rfa01cForm.id
            ? <NavLink
              key='editChildIdentified'
              active={isNavLinkActive(rfa01cForm.id)}
              clickHandler={() => handleNavLinkClick(rfa01cForm.id)}
              href={urlPrefixHelper(`/rfa/a01/${rfa01aApplicationId}/c01/${rfa01cForm.id}/edit`)}
              text={`child id: ${rfa01cForm.id}`} />
            : <NavLink
              key='createChildIdentified'
              active={isNavLinkActive(rfa01aApplicationId)}
              clickHandler={() => handleNavLinkClick(rfa01aApplicationId)}
              href={urlPrefixHelper(`/rfa/a01/${rfa01aApplicationId}/c01/`)}
              text='child identified' />)
          : null
      }
    </RfaSideBarTemplate>
  )
}

C01SideBar.propTypes = {
  isNavLinkActive: PropTypes.func,
  handleNavLinkClick: PropTypes.func,
  rfa01cForm: PropTypes.object
}

C01SideBar.defaultProps = {
  childIdentified: false,
  rfa01cForm: null
}

export default C01SideBar
