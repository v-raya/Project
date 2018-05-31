import React from 'react'
import BreadCrumb from 'components/common/breadCrumb'
import {PageHeader} from 'react-wood-duck'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'
import {Link} from 'react-router-dom'

const PageHeaderWrapper = ({
  facilityName
}) => (
  <div>
    <PageHeader
      pageTitle={facilityName}
      button={null}
    />
    <BreadCrumb
      navigationElements={[<Link to={urlPrefixHelper('/search')}>Facility Search</Link>]}
    />
    <div className='header_cwds col-xs-12 col-sm-12 col-md-12 col-lg-12'>
      <div className='header-logo' />
    </div>
  </div>
)

PageHeaderWrapper.defaultProps = {
  facilityName: 'N/A'
}

export {PageHeaderWrapper}
