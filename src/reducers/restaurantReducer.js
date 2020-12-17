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
      zipcode: '',
      // 11207 ,
      cuisine: [],
      amenities: []
    },
    filteredRestaurants: [
      {
        name: 'Salad Boi',
        address: '123 23rd St.',
        cuisine: 'Vegetarian',
        open: true
      },
      {
        name: 'Plumpy Dumpy',
        address: '227 Madison Ave',
        cuisine: 'Chinese',
        open: true
      },
      {
        name: 'Sherlock\'s',
        address: '221B Baker St.',
        cuisine: 'American',
        open: false
      }
    ],
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
      //   zip: '', 
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
      //       comment: '',
      //       username: '',
      //       timestamp: ''
      //     }
      //   ]
      // }
    username: '',
    userId: '',
    cuisines: ["American", "Vegetarian", "Chinese", "Japanese", "Thai", "Indian", "Italian", "Pizza", "Mexican", "Korean", "Latin American", "Caribbean", "Soul Food", "BBQ", "Vietnamese", "Other"]
 };

 const restaurantReducer = (state = initialState, action) => {


    switch(action.type){

      case types.FILTER_RESTAURANTS:


      case types.ADD_RESTAURANT:


      case types.EDIT_RESTAURANT:


      case types.ADD_COMMENT:


      case types.GET_COMMENTS:


      case types.LOGIN_USER:


      case types.HANDLE_ZIP_INPUT:

      default:
        return state;
    
    }
 }

 export default restaurantReducer;