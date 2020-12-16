/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

 import { combineReducers } from 'redux';
 import restaurantReducer from './restaurantReducer.js';

 const reducers = combineReducers({
    restaurant: restaurantReducer 
 })


 export default reducers;