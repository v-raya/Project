// By default, this pack is loaded for server-side rendering.
// It must expose react_ujs as `ReactRailsUJS` and prepare a require context.

import './polyfills'
import React from 'react'

let componentRequireContext = require.context('.', true)
let ReactRailsUJS = require('react_ujs')
ReactRailsUJS.useContext(componentRequireContext)
