/**
 * ************************************
 *
 * @module  App.jsx
 * @author Lara, Chris, Carlos
 * @date 12/15/2020
 * @description renders React app
 *
 * ************************************
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/styles.scss';



// const mapDispatchToProps = (dispatch) => ({

// })

class App extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <h2>TESTING REACT APP</h2>
    )
  }
}

// export default connect(null, mapDispatchToProps)(App);
export default App;