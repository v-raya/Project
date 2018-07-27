import { checkAndSplitValue, checkForLicenseStatus, sortbyDate } from 'search/common/commonUtils.js'

describe('check and split value method with different inputs', () => {
  it('should return wildcard tokens attached to both words', () => {
    const input = 'home residence'
    const output = '*home* *residence*'
    expect(checkAndSplitValue(input)).toEqual(output)
  })
  it('should return undefined if empty string is passed', () => {
    const input = undefined
    expect(checkAndSplitValue(input)).toEqual(undefined)
  })
  it('should return undefined if empty string is passed', () => {
    const input = '2870 gateway oaks sacramento, CA, 95833'
    expect(checkAndSplitValue(input)).toEqual('*2870* *gateway* *oaks* *sacramento,* *CA,* *95833*')
  })
  it('should return empty string if empty string is passed', () => {
    const input = ''
    expect(checkAndSplitValue(input)).toEqual('')
  })
  it('should return empty string if special character * is passed', () => {
    const input = '*'
    expect(checkAndSplitValue(input)).toEqual('')
  })
})

describe('check licenseStatus based on isAllActive flag', () => {
  it('should return empty string', () => {
    const isAllActive = true
    const statusValue = [{id: 8, value: 'Application Denied'}, {id: 7, value: 'Application Withdrawn'}]
    const output = ''
    expect(checkForLicenseStatus(isAllActive, statusValue)).toEqual(output)
  })
  it('should return an array', () => {
    const isAllActive = false
    const statusValue = [{id: 8, value: 'Application Denied'}, {id: 7, value: 'Application Withdrawn'}]
    const output = [8, 7]
    expect(checkForLicenseStatus(isAllActive, statusValue)).toEqual(output)
  })
})

describe('sort by date ', () => {
  it('should return asc order', () => {
    const a = '11/03/2001'
    const b = '04/30/2004'
    const output = -1
    expect(sortbyDate(a, b)).toEqual(output)
  })
  it('should return desc order', () => {
    const a = '11/03/2004'
    const b = '04/30/2001'
    const output = 1
    expect(sortbyDate(a, b)).toEqual(output)
  })
})
