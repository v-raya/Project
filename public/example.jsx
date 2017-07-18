import React from 'react'

// index.js must have a <div id="exampleContainer"> </div>

// NOTE:  for the purpose of demonstrating the react lifecycle,
// NOTE:  the render method is shown multiple times.
// NOTE:  in reality, each class can ONLY HAVE ONE RENDER METHOD.

// While 'initial render' and 'clean up' phases are 1 time operations,
// state change and prop change cycles can occur multiple times.

var AnExample = React.createClass({

  /*
   ******************
   * Initial Render *
   ******************
   */

  getDefaultProps: function () { // CALL 1
    // specifies default value of this.props.
    // called BEFORE componenet is created AND props from parents are passed in.
    // only gets called once on initialization.
  },
  getInitialState: function () { // CALL 2
    //  specifies default value of this.state.
    //   called BEFORE componenet is created AND props from parents are passed in.
    //   only gets called once on initialization.
  },
  componentWillMount: function () { // CALL 3
    // last method before componenet rendering that gets called.
    // NOTE: setting state here (i.e. this.setState() call) will NOT result in a re-render.
    // only gets called once on initialization.
  },
  // NOTE render for the first time is called here
  render: function () { // CALL 4
    // REQUIRED method for every component.
    // responsible for returning the root node (with/without many children)
    // if you don't want to render anything return null or false.
  },
  componentDidMount: function () { // CALL 5
    // gets called after component renders and is placed on DOM.
    // DOM querying operations can start here.
    // only gets called once on initialization.
  },

  /*
   **********************
   * State Update Cycle *
   **********************
   */

  // NOTE: shouldComponentUpdate for the first time is called
  shouldComponentUpdate: function () { // CALL 6
    // allows you to control when an update in state causes a re-render.
    // by default, when there is a state change, react will re-render the UI.
    // if this method returns a false value, this component will not update UI.
  },
  componentWillUpdate: function () { // CALL 7
    // gets called before component is about to update.
    // useful for data conditioning.
    // NOTE: a call to this.setState() will NOT cause a re-render.
  },
  // NOTE render for the second time is called here
  render: function () { // CALL 8
    // REQUIRED method for every component.
    // responsible for returning the root node (with/without many children)
    // if you don't want to render anything return null or false.
  },
  // NOTE: componentDidUpdate for the first time is called
  componentDidUpdate: function () { // CALL 9
    // gets called after render.
    // any code that needs to be executed after an update gets put here.
  },

  /*
   **********************
   * Props Change Cycle *
   **********************
   */

  componentWillReceiveProps: function () { // CALL 10
    // this method returns one argument , an object
    //  with the new prop values that are about to be assigned to it.
  },
  // NOTE: shouldComponentUpdate for the second time is called
  shouldComponentUpdate: function () { // CALL 11
    // allows you to control when an update in state causes a re-render.
    // by default, when there is a state change, react will re-render the UI.
    // if this method returns a false value, this component will not update UI.
  },
  componentWillUpdate: function () { // CALL 12
    // gets called before component is about to update.
    // useful for data conditioning.
    // NOTE: a call to this.setState() will NOT cause a re-render.
  },
  // NOTE render for the third time is called here
  render: function () { // CALL 13
    // REQUIRED method for every component.
    // responsible for returning the root node (with/without many children)
    // if you don't want to render anything return null or false.
  },
  // NOTE: componentDidUpdate for the first time is called
  componentDidUpdate: function () { // CALL 14
    // gets called after render.
    // any code that needs to be executed after an update gets put here.
  },

  /*
   ************
   * Clean Up *
   ************
   */
  componentWillUnmount: function () { // CALL 15
    // any clean up tasks go here such as
    // removing event listening and stopping timers.
  }

})
