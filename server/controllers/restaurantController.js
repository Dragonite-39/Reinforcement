const db = require('../models/restaurantsModel.js');


  const restaurantController = {};
  
  restaurantController.byZipcode = (req, res, next) => {
    // get zipcode from req.params
    const { zipcode } = req.params;
    console.log("zipcode:", zipcode);
    
    const queryString = `
      SELECT * FROM restaurants 
      WHERE zipcode = $1
    `;
    
    // query db for restaurants with zipcode that matches the one from params
    db.query(queryString, [zipcode])
      .then((data) => {
        console.log("data", data)
        res.locals.restaurants = data.rows;
        return next();
      })
      .catch((err) => next({err}));
  };

// get specific restaurants (with specific cuisine and amenities, zipcode)
restaurantController.byFilterInfo = (req, res, next) => {
  // get zipcode from req.params
  const { filterInfo } = req.body;
  const { zipcode, cuisines, amenities } = filterInfo;
  console.log('zipcode, cuisines, amenities', zipcode, cuisines, amenities)
  // need to get the specific amenities and cuisine out of the arrays somehow
  // get amenity ids for appropriate ammenities
  // 
  // join query to get amenities
  // use dummy data for cuisi
  const queryString = `
    SELECT restaurants.* 
    FROM restaurants 
    INNER JOIN ser_rest_relation 
    ON restaurant.restaurant_id = ser_rest_relation.fk_restaurant_id
    INNER JOIN services_amenities
    ON services_amenities.ser_amen_id = ser_rest_relation.fk_ser_ammen_id
    ${amenitiesString} AND ${cuisinesString} AND restaurant.zipcode = $1
  `;
  
  let amenitiesString = '';
  for (let i = 0; i < amenities.length; i++) {
    if (amenitiesString === '') {
      amenitiesString.concat("WHERE services_amenities.ser_amen = " + amenties[i])
    } else {
      amenitiesString.concat("AND WHERE services_amenities.ser_amen = " + amenties[i])
    }
  }

  let cuisinesString = '';
  for (let i = 0; i < amenities.length; i++) {
    if (amenitiesString === '') {
      amenitiesString.concat("WHERE restaurant.cuisine = " + cuisines[i])
    } else {
      amenitiesString.concat("AND WHERE restaurant.cuisine = " + cuisines[i])
    }
  }
  
  // query db for restaurants with zipcode that matches the one from params
  db.query(queryString, [zipcode])
    .then((data) => {
      res.locals.restaurants = data.rows;
      return next();
    })
    .catch((err) => next({err}));
};

// post request to add restaurant
  // return new query with updated restaurant list?

// post request to edit restaurant

// post request to add comment

// post request to edit comment

// post request to delete comment
module.exports = restaurantController;

/*
Cuisine types:
-American
-Vegetarian
-Chinese
-Japanese
-Thai
-Indian
-Italian
-Pizza
-Mexican
-Korean
-Latin American
-Caribbean
-Soul Food
-BBQ
-Vietnamese
-Other
Amenities:
-Curbside Pickup
-Takeout
-Patio Dining
-Indoor Dining
-Delivery

*/