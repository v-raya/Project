import { checkAndSplitValue } from 'search/common/commonUtils.js'

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
