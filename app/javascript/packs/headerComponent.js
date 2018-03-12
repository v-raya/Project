
// import HeaderComponent from '../header'

// export default HeaderComponent

var componentRequireContext = require.context('header', true)
var ReactRailsUJS = require('react_ujs')
ReactRailsUJS.useContext(componentRequireContext)
