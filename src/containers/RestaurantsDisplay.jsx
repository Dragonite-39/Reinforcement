
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
import RestaurantMiniCard from '../components/RestaurantMiniCard.jsx';

const mapStateToProps = (state) => {
  // console.log("STATE: ", state);
  const { currentRestaurant, filteredRestaurants, currentRestaurantData, username, userId} = state.restaurant;

  return ({
    currentRestaurant,
    filteredRestaurants,
    currentRestaurantData,
    username,
    userId
  })
};

const mapDispatchToProps = dispatch => ({
  
}) 

class RestaurantsDisplay extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let restaurants = this.props.filteredRestaurants;
    console.log("** ", restaurants)
    let restaurantArr = [];
    for (let i = 0; i < restaurants.length; i++) {
      let restaurantObj = restaurants[i];
      restaurantArr.push(<RestaurantMiniCard key={`miniCard${i}`} {...restaurantObj}/>)
    }

    return (
      <div className="restaurants">
        { restaurantArr } 
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsDisplay);