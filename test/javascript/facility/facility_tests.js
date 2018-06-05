import React from 'react'
import Facility from 'facility/index'
import {shallow, mount} from 'enzyme'
import rootReducer from 'reducers'
import {createStore} from 'redux'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

describe('Verify Facility component', function () {
  const match = {
    params: {
      'id': 'SouUlov56F'
    }
  }
  let store = createStore(rootReducer)
  it('renders facility index component', function () {
    const FacilityCompMount = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Facility
            match={match}
          />
        </BrowserRouter>
      </Provider>)

    expect(FacilityCompMount.find('.main_page').length).toEqual(1)
  })
})
