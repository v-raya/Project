import 'packs/polyfills'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Promise from 'es6-promise-promise'
import 'whatwg-fetch'

Enzyme.configure({ adapter: new Adapter() })

let testsContext = require.context('./', true, /_tests$/)
testsContext.keys().forEach(testsContext)

let componentContext = require.context('./../', true, /\*\.(js|jsx)$/)
componentContext.keys().forEach(componentContext)
