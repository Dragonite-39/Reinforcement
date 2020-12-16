/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

 import * as types from '../constants/actionTypes.js';

 export const filterRestaurants = () => ({
   type : types.FILTER_RESTAURANTS
 });

 export const addRestaurant = () => ({
  type : types.ADD_RESTAURANT
});

export const editRestaurant = () => ({
  type : types.EDIT_RESTAURANT
});

export const addComment = () => ({
  type : types.ADD_COMMENT
});

export const getComments = () => ({
  type : types.GET_COMMENTS
});