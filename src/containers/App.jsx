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
import MenuBox from '../components/MenuBox.jsx';
import RestaurantsDisplay from './RestaurantsDisplay.jsx';
import '../styles/styles.scss';


class App extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
      <div className="menu">
        <MenuBox />
      </div>
      <div className="mainDisplay">
        <RestaurantsDisplay />
      </div>
      </div>
    )
  }
}

// export default connect(null, mapDispatchToProps)(App);
export default App;