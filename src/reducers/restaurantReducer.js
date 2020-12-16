/**
 * ************************************
 *
 * @module  restaurantReducer
 * @author Lara, Chris
 * @date 12/16.
 * @description reducer for restaurants
 *
 * ************************************
 */

 import * as types from '../constants/actionTypes.js';

 const initialState = {
    currentRestaurant: null,
    filterInfo: {
      zip: null,
      cuisine: [],
      amenities: []
    },
    filteredRestaurants: [],
      // Structure of an element on the filteredRestaurants array
      // {
      //   name: '',
      //   address: '',
      //   cuisine: '',
      //   open: boolean
      // }
    currentRestaurantData: {},
      // structure of currentRestaurantData obj
      // {
      //   name: '',
      //   restaurantId: '',
      //   cuisine: '',
      //   address: '',
      //   phone: '',
      //   website: '',
      //   amenities: [],
      //   hours: Boolean,
      //   menu: Boolean,
      //   open: Boolean,
      //   comments: [
      //     {
      //       commintId: '', 
      //       text: '',
      //       username: '',
      //       timestamp: ''
      //     }
      //   ]
      // }
    username: '',
    userId: ''
 };

 const restaurantReducer = (state = initialState, action) => {


    switch(action.type){

      case types.FILTER_RESTAURANTS:


      case types.ADD_RESTAURANT:


      case types.EDIT_RESTAURANT:


      case types.ADD_COMMENT:


      case types.GET_COMMENTS:


      default:
        return state;
    
    }
 }

 export default restaurantReducer;