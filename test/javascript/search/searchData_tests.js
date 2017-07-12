import React from 'react'
import SearchData from '../../../app/javascript/search/search_Data'
var TestUtils = require('react-dom/lib/ReactTestUtils')

describe('Render Search Data', function () {
  const props = {}
  props.state = {
  	inputData: '02,738,193600008,home,2024 W el camino,Sacramento,Ca,95833',
  	searchData: [
    {
      assigned_worker: 'Kari Gutierrez',
      county: 'Marin',
      district_office: 'NO. CAL SC/RES',
      fac_capacity: 7,
      fac_email_address: null,
      fac_last_visit_date: '1991-12-10',
      fac_lic_eff_date: '1992-02-22',
      fac_licensee_name: 'TERRIER PROGRAMS, INC.',
      fac_licensee_type: 'C',
      fac_mail_city: 'MODESTO',
      fac_mail_state: 'CA',
      fac_mail_street_addr: '767 GLEN EAGLES DRIVE',
      fac_mail_zip_code: '95350',
      fac_name: "DEPUTY DOG'S GROUP HOME",
      fac_nbr: 193600008,
      fac_orig_appl_rec_date: '1983-02-02',
      fac_res_city: 'MODESTO',
      fac_res_state: 'CA',
      fac_res_street_addr: '767 GLEN EAGLES DRIVE',
      fac_res_zip_code: '95350',
      facility_telephone: '8183366556',
      last_visit_reason: "Renewal (Fac.'s w/Expir.)",
      status: 'Licensed',
      type: 'Foster Family Home (Confidential - Do not release)'
    }
  ]
  }
  const renderDataCop = TestUtils.createRenderer()
  const dataCompRendered = renderDataCop.render(<SearchData {...props} />)
  it('Verify Search Data component was Rendered', function () {
  	let toggleDiv = dataCompRendered.props
  	expect(toggleDiv.className).toEqual('search-toggle col-xs-12 col-sm-12 col-md-12 col-lg-12')
  })
})
