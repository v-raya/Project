import React from 'react'
import Facility from 'facility/index'
import {shallow, mount} from 'enzyme'
import rootReducer from 'reducers'
import {createStore} from 'redux'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

describe('Verify Facility component', () => {
  const match = {
    params: {
      'id': 'SouUlov56F'
    }
  }
  const store = createStore(rootReducer)
  it('renders facility index component', () => {
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
