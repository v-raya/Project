import React from 'react'
import PropTypes from 'prop-types'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'

const Rfa01cEditLink = ({
  applicationId,
  rfa01CForm
}) => {
  return (
    <div id={'rfa01cEdit'}>
      <a href={urlPrefixHelper('/rfa/a01/' + applicationId + '/c01/' + rfa01CForm[0].id + '/edit')} className='btn btn-default'>
        <p>Edit RFA 01 C </p>
      </a>
    </div>
  )
}

Rfa01cEditLink.propTypes = {
  applicationId: PropTypes.string,
  rfa01CForm: PropTypes.array
}

export default Rfa01cEditLink
