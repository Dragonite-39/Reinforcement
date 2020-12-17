
/**
 * ************************************
 *
 * @module  RestaurantsDisplay.jsx
 * @author Lara, Chris
 * @date 12/16
 * @description RstaurantsDisplay component
 *
 * ************************************
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';



class RestaurantsDisplay extends Component {
  constructor(props) {
    super(props)
  }

  render() {


    return (
      <div className="restaurants">
        
      </div>
    )
  }
}

export default RestaurantsDisplay;