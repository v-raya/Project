import React from 'react'
import {InputComponent} from 'components/common/inputFields'
import {DropDownField} from 'components/common/dropDownField'
import CommonAddressFields from 'components/rfa_forms/commonAddressField'
import {dictionaryNilSelect, getDictionaryId} from 'helpers/commonHelper.jsx'
import PropTypes from 'prop-types'

const DesiredChildEducation = ({
  index,
  child,
  schoolGrades,
  stateTypes,
  setParentState,
  handleAddressChange
}) => (
  <div className='col-md-12'>
    <div className='card-header'><span>Child's Education</span></div>
    <DropDownField
      id='grade'
      gridClassName='col-md-4'
      selectClassName='reusable-select'
      value={getDictionaryId(child.school_grade)}
      optionList={schoolGrades}
      label='Grade'
      onChange={(event) => setParentState(index, 'school_grade', dictionaryNilSelect(event.target.options))} />
    <InputComponent
      gridClassName='col-md-8'
      id='name_of_school'
      value={child.school_name}
      label='Name of School'
      type='text'
      onChange={(event) => setParentState(index, 'school_name', event.target.value)} />
    <CommonAddressFields
      id='street_address'
      index={0}
      addressTitle='Address'
      stateTypes={stateTypes}
      addressFields={child.school_address}
      onChange={(fieldId, event) => handleAddressChange(fieldId, event, index)} />
  </div>
)

DesiredChildEducation.propTypes = {
  index: PropTypes.number,
  schoolGrades: PropTypes.array,
  stateTypes: PropTypes.array,
  child: PropTypes.object,
  setParentState: PropTypes.func,
  handleAddressChange: PropTypes.func
}

DesiredChildEducation.defaultProps = {
  index: 0
}
export default DesiredChildEducation
