import React from 'react'
import FacilityAddress from '../../../app/javascript/facility/address.jsx'
var TestUtils = require('react-dom/lib/ReactTestUtils')

describe('Verify Facility Address', function () {
  const props = {
    facilityData: {
      assigned_worker: 'Steve Schmitz',
      county: 'Alameda',
      district_office: 'PACIFIC INLAND CR',
      fac_capacity: 2,
      fac_email_address: null,
      fac_last_visit_date: null,
      fac_lic_eff_date: '2012-01-01',
      fac_licensee_name: 'MARCH, MEG',
      fac_licensee_type: null,
      fac_mail_city: 'TOONTOWN',
      fac_mail_state: 'CA',
      fac_mail_street_addr: '2366 TWINS STREET',
      fac_mail_zip_code: '95800',
      fac_name: 'MARCH, MEG CFH',
      fac_nbr: 909453699,
      fac_orig_appl_rec_date: null,
      fac_res_city: 'TOONTOWN',
      fac_res_state: 'CA',
      fac_res_street_addr: '2366 TWINS STREET',
      fac_res_zip_code: '95800',
      facility_telephone: '9515912001',
      last_visit_reason: null,
      status: 'Certified (CFH & OSGH)',
      type: 'FFA-Certified Home'
    }
  }
  const renderAddress = TestUtils.createRenderer()
  const addressComp = renderAddress.render(<FacilityAddress {...props} />)
  const result_tag = addressComp.props
  it('verify Facility Address fields', function () {
    let addressClassName = result_tag
  })
})
