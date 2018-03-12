// By default, this pack is loaded for server-side rendering.
// It must expose react_ujs as `ReactRailsUJS` and prepare a require context.

import './polyfills'
import React from 'react'

var ReactRailsUJS = require('react_ujs')

var componentRequireContext = require.context('components', true)
ReactRailsUJS.useContext(componentRequireContext)

// var headerRequireContext = require.context('header', true)
// ReactRailsUJS.useContext(headerRequireContext)
