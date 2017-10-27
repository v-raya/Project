import React from 'react'
import PropTypes from 'prop-types'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'

const Rfa01bLink = ({
  adult,
  api_url_path,
  applicationId,
  index

}) => {
  return (
    <div id={'rfa01B' + adult.id}>
      <a href={urlPrefixHelper('/rfa/b01/?application_id=' + applicationId + '&adult_id=' + adult.id + '&api_url_path=' + api_url_path)} className='btn btn-default'>
        <p>Start RFA 01 B for {adult.first_name}</p>
      </a>
    </div>
  )
}

Rfa01bLink.propTypes = {
  applicationId: PropTypes.string,
  adult: PropTypes.object,
  index: PropTypes.number
}

export default Rfa01bLink
