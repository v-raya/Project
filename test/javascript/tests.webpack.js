
var testsContext = require.context("./", true, /_tests$/);
testsContext.keys().forEach(testsContext);
