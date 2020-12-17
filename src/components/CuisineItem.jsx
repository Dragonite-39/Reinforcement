// /**
//  * ************************************
//  *
//  * @module  CuisineItem
//  * @author Lara, Chris
//  * @date 12/16.
//  * @description one Cuisine type
//  *
//  * ************************************
//  */

import React, { Component } from 'react';

 

// //  const CuisineItem = (props) => {
// //   //  console.log("TEST FROM CUISINE ITEM: ", props.cuisine);
// //   //  return (
// //   //    <p>{props.cuisine}</p>
// //   //  )
     
// //  }

class CuisineItem extends Component { 
  constructor(props) {
    super(props);
  }
  render() {
    console.log("TEST FROM CUISINE ITEM: ", this.props.cuisine)
    let cuisine = this.props.cuisine;

    return(
      <div className="cuisineBox">
      <input type="checkbox" id={cuisine} name={cuisine} value={cuisine}></input>
      <label for={cuisine}>{cuisine}</label> 
      </div>
    )
  }
}

 export default CuisineItem;