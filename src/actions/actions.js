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

 export const filterRestaurants = (filterData) => ({
   type : types.FILTER_RESTAURANTS,
   payload: filterData
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

export const loginUser = () => ({
  type : types.LOGIN_USER
});

export const handleZipInput = () => ({
  type: types.HANDLE_ZIP_INPUT,
  payload: payload
})