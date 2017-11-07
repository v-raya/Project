
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

var testsContext = require.context('./', true, /_tests$/)
testsContext.keys().forEach(testsContext)

var componentContext = require.context('./../', true, /\*\.(js|jsx)$/)
componentContext.keys().forEach(componentContext)
