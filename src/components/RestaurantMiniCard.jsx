/**
 * ************************************
 *
 * @module  RestaurantMiniCard
 * @author Lara, Chris
 * @date 12/16.
 * @description one Cuisine type
 *
 * ************************************
 */

 import React from 'react';

const RestaurantMiniCard = (props) => {
  let open;
  if (props.open === true) open = "✓ open";
  else open = "X closed";
    
  return  (  
  <div className="restaurantCard">
    {/* <div></div>  (for image) */}
    <h4 className="restCardName">{ props.name }</h4>
    <p className="restCardAddress">{ props.address }</p>
    <p className="restCardOpen">{ open }</p>
  </div>
  )
}

 export default RestaurantMiniCard;