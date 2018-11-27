import React from 'react'
import {fetchRequest} from 'helpers/http'
import fetchMock from 'fetch-mock'

describe('test real API', () => {
  const mockParams = {
    data: 'home'
  }
  let fetchCall, url
  beforeEach(() => {
    url = 'http://cwds.ca.gov/geoservice/'
    fetchMock.mock(url, {
      body: JSON.stringify({ suggestions: [{}, {}] }),
      status: 200,
      headers: { 'content-type': 'application/json' }
    })
  })
  afterEach(() => {
    fetchMock.restore()
  })
  it('verify fetchRequest to be called with headers and body', () => {
    fetchCall = fetchRequest('http://cwds.ca.gov/geoservice/', 'POST', mockParams)
    expect(fetchMock.called(url)).toBe(true)
    expect(fetchMock._matchedCalls[0][0]).toEqual(url)
  })
  it('verify GET Method to be called', () => {
    fetchCall = fetchRequest('http://cwds.ca.gov/geoservice/', 'GET')
    expect(fetchMock._matchedCalls[0][1].method).toEqual('GET')
  })
})
