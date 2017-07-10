
var testsContext = require.context('./', true, /_tests$/)
testsContext.keys().forEach(testsContext)

var componentContext = require.context('./../', true, /\*\.(js|jsx)$/)
componentContext.keys().forEach(componentContext)
