import React from 'react'

export default class FacilityAddress extends React.Component {
  render () {
    let phoneFormat = this.props.facilityData.facility_telephone.replace(/(\d{3})(\d{3})(\d{4})/, '($1)-$2-$3')
    return (
      <div className='facility-address col-xs-12 col-sm-12 col-md-12 col-lg-12'>
        <div className='facility-address-block col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <div className='facility-address-details col-xs-12 col-sm-4 col-md-4 col-lg-4'>
            <div className='inner_block'>
              <div className='small_inner_block physical_address'>
                <p>PHYSICAL ADDRESS</p>
                <p className='address_street'>{this.props.facilityData.fac_res_street_addr}</p>
                <p>{this.props.facilityData.fac_res_city},
                    {' ' + this.props.facilityData.fac_res_state}
                  {' ' + this.props.facilityData.fac_res_zip_code}
                </p>
              </div>
              <div className='small_inner_block county_details'>
                <p>COUNTY NAME</p>
                <p>{this.props.facilityData.county}</p>
              </div>
              <div className='phone_details'>
                <div className='small_inner_block phone_primary'>
                  <p>PRIMARY PHONE</p>
                  <p>{phoneFormat}</p>
                </div>
                <div className='small_inner_block phone_alt'>
                  <p>ALTERNATIVE PHONE</p>
                  <p>N/A</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
            <div className='inner_block'>
              <div className='small_inner_block postal_address'>
                <p>POSTAL ADDRESS</p>
                <p className='address_street'>{this.props.facilityData.fac_mail_street_addr}</p>
                <p>{this.props.facilityData.fac_mail_city},
                    {' ' + this.props.facilityData.fac_mail_state }
                  {' ' + this.props.facilityData.fac_mail_zip_code}
                </p>
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
            <div className='inner_block'>
              <div className='small_inner_block last_visit'>
                <p>LAST VISIT DATE</p>
                <p className='address_street'>
                  { this.props.facilityData.fac_last_visit_date == null ? 'N/A' : this.props.facilityData.fac_last_visit_date }
                </p>
              </div>
              <div className='small_inner_block visit_reason'>
                <p>LAST VISIT REASON</p>
                <p>{ this.props.facilityData.last_visit_reason == null ? 'N/A' : this.props.facilityData.last_visit_reason }</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
