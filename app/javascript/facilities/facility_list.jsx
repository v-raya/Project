import React from 'react'
import {urlPrefixHelper} from '../helpers/url_prefix_helper'

export default class FacilityList extends React.Component {
  render () {
    const prefixUrl = urlPrefixHelper('/facilities/'.concat(String(this.props.fac_nbr)))
    return (
      <div className='facility-list col-xs-12 col-sm-12 col-md-12 col-lg-12'>
        <div className='list_block col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <h1>
            {/* <Link to={{ pathname: url, state: { data: this.props } }}> {this.props.fac_name}</Link> */}
            <a href={prefixUrl}>{this.props.fac_name}</a>

          </h1>
          <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
            <div className='inner_block'>
              <p>NAME OF LICENSEE/ PARENTS</p>
              <p>{this.props.fac_licensee_name}</p>
              <p>Type: {this.props.type}</p>
              <p>Status: {this.props.status}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
