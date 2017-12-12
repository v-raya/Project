import React from 'react'
import PropTypes from 'prop-types'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'

const Rfa01cCreateLink = ({
  applicationId,
  rfa01CForm
}) => {
  return (
    <div id={'rfa01cCreate'}>
      <a href={urlPrefixHelper('/rfa/a01/' + applicationId + '/c01/')} className='btn btn-default'>
        <p>Start RFA 01 C </p>
      </a>
    </div>
  )
}

Rfa01cCreateLink.propTypes = {
  applicationId: PropTypes.string,
  rfa01CForm: PropTypes.object
}

export default Rfa01cCreateLink
