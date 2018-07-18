import React from 'react'
import MultiSelect from 'components/common/multiSelect'
import InputDataBlock from './common/inputDataBlock.js'
import {InputComponent} from 'components/common/inputFields'
import {dictionaryNilSelectValue, getFromValue} from 'helpers/commonHelper.jsx'
import {DropDownField} from 'components/common/dropDownField'
import PropTypes from 'prop-types'

const SearchInput = ({
  resetForm,
  handleInputChange,
  handlePageNumberChange,
  sizeValue,
  pageNumber,
  countyList,
  searchApiCall,
  facilityTypes,
  licenseStatuses,
  countyValue,
  facilityTypeValue,
  licenseStatusValue,
  facilityIdValue,
  facilityNameValue,
  facilityAddressValue

}) => (
  <div className='search-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
    <div className='search_input col-xs-12 col-sm-12 col-md-12 col-lg-12'>
      <form onSubmit={(event) => { handlePageNumberChange(pageNumber); searchApiCall(getFromValue(sizeValue, pageNumber), sizeValue); event.preventDefault() }}>
        <div className='field_input col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <div className='input_data col-xs-12 col-sm-2 col-md-2 col-lg-2'>
            <DropDownField
              label='County Type'
              id='county_select'
              selectClassName='searchSelect'
              value={countyValue}
              optionList={countyList}
              onChange={(event) => handleInputChange('countyValue', dictionaryNilSelectValue(event.target.options))} />
          </div>
          <div className='input_data col-xs-12 col-sm-3 col-md-3 col-lg-3'>
            <DropDownField
              label='Facility Type'
              id='facility_select'
              selectClassName='searchSelect'
              value={facilityTypeValue}
              optionList={facilityTypes}
              onChange={(event) => handleInputChange('facilityTypeValue', dictionaryNilSelectValue(event.target.options))} />
          </div>
          <div className='input_data col-xs-12 col-sm-3 col-md-3 col-lg-3'>
            <MultiSelect
              label='License Status'
              placeholder=''
              values={licenseStatusValue}
              searchable={true}
              className='searchSelect'
              optionList={licenseStatuses}
              onChange={(event) => handleInputChange('licenseStatusValue', event.map((e) => ({id: e.id, value: e.value})))} />
          </div>
          <div className='input_data col-xs-12 col-sm-2 col-md-2 col-lg-2' >

          </div>
          <div className='search_block  col-xs-12 col-sm-2 col-md-2 col-lg-2'>
            <button id='search' type='submit' className= 'btn btn-primary'>Search</button>
          </div>

        </div>
        <div className='field_input col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <InputDataBlock
            columnWidth={2}>
            <InputComponent id='facilityIdValue'
              label='Facility ID #'
              fieldClassName='form-control'
              value={facilityIdValue}
              placeholder='Enter Facility ID #'
              type='text'
              onChange={(event) => handleInputChange('facilityIdValue', event.target.value)}/>
          </InputDataBlock>
          <InputDataBlock
            columnWidth={3}>
            <InputComponent id='facilityNameValue'
              label='Facility Name'
              fieldClassName='form-control'
              value={facilityNameValue}
              placeholder='Enter Facility Name'
              type='text'
              onChange={(event) => handleInputChange('facilityNameValue', event.target.value)} />
          </InputDataBlock>
          <InputDataBlock
            columnWidth={5}>
            <InputComponent id='facilityAddressValue'
              label='Facility Address'
              fieldClassName='form-control'
              value={facilityAddressValue}
              placeholder='Enter Facility Address'
              type='text'
              onChange={(event) => handleInputChange('facilityAddressValue', event.target.value)} />
          </InputDataBlock>
          <div className='search_block  col-xs-12 col-sm-2 col-md-2 col-lg-2'>
            <button id='reset' type='button' onClick= {resetForm} className= 'btn btn-primary'>Reset</button>
          </div>
        </div>
        {/* <div className='field_search col-xs-12 col-sm-2 col-md-2 col-lg-2'>

      </div> */}
      </form>
    </div>
  </div>
)

SearchInput.propTypes = {
  countyValue: PropTypes.string,
  facilityTypeValue: PropTypes.string,
  licenseStatusValue: PropTypes.array,
  facilityIdValue: PropTypes.string,
  facilityNameValue: PropTypes.string,
  facilityAddressValue: PropTypes.string,
  sizeValue: PropTypes.number,
  handleInputChange: PropTypes.func,
  resetForm: PropTypes.func,
  handleOnSubmit: PropTypes.func
}
SearchInput.defaultProps = {
  countyValue: '',
  facilityTypeValue: '',
  licenseStatusValue: [],
  facilityIdValue: '',
  facilityNameValue: '',
  facilityAddressValue: '',
  pageNumber: 1,
  sizeValue: 10,
  fromValue: 0
}

export default SearchInput
