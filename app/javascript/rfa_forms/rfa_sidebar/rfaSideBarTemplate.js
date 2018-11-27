import Immutable from 'immutable'
import React from 'react'
import Collapsible from 'react-collapsible'
import Affix from 'react-overlays/lib/AutoAffix'
import PropTypes from 'prop-types'
import {NavLinks} from 'react-wood-duck'

const RfaSideBarTemplate = ({
  idPrefix,
  label,
  children
}) => {
  return (
    <div>
      <div className={`side-bar${idPrefix}`} aria-label='Side Bar'>
        <Collapsible trigger={<div className='collapsible-label'>{label}</div>} open>
          <NavLinks>
            <div className='nav-link'>
              {children}
            </div>
          </NavLinks>
        </Collapsible>
      </div>
    </div>
  )
}

RfaSideBarTemplate.propTypes = {
  label: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
export default RfaSideBarTemplate
