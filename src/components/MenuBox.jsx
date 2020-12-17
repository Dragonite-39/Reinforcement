/**
 * ************************************
 *
 * @module  restaurantReducer
 * @author Lara, Chris
 * @date 12/16.
 * @description MenuBox component (left hand side menu bar w/ filter funcitonality)
 *
 * ************************************
 */

 import React, { Component } from 'react';
 import { connect } from 'react-redux';
 import * as actions from '../actions/actions.js';
 import CuisineItem from './CuisineItem.jsx';

 const mapStateToProps = (state) => {
    const { filterInfo, username, userId, cuisines } = state.restaurant;
    // console.log('STATE: ', state)
    return ({
      filterInfo,
      username, 
      userId,
      cuisines
    })
 };


 const mapDispatchToProps = dispatch => ({
    filterRestaurants: (filterInfo) => {
      dispatch(actions.filterRestaurants(filterInfo))
    },
    // handleZipInput: (payload) => dispatch(actions.handleZipInput(payload)),
    loginUser: () => {
      dispatch(actions.loginUser())
    }
 })

 class MenuBox extends Component {
   constructor(props) {
     super(props)
   }
   handleZipInput = (event) => {
      console.log("test: ", event.target.value);
      this.setState({
        zipcode: event.target.value
      })
   }

   render() {
     //logic

      // console.log("PROPS: ", this.props);
     const cuisines = []; 
     for (let i = 0; i < this.props.cuisines.length; i++) {
       console.log("TEST: ", this.props.cuisines[i]);
       const cuisine = this.props.cuisines[i];
       cuisines.push(<CuisineItem key={`cuisine${i}`} cuisine={cuisine}/>)
      
     }
    

     return (
       <>
          <h2>Filter Restaurants</h2>
          <div className="inputs">
            <h3>Enter Zipcode</h3>
            {/* {zip code input} */}
            <input 
              type="text"
              id="zipInput"
              name="zipInput"
              placeholder="Enter Zipcode"
              value={this.props.filterInfo.zipcode}
              onChange={(event) => {
                console.log(event.target.value);
                this.handleZipInput(event)}}
              />
              
            {/* {cuisine drop down} */}
            {/* <select 
              className="dropdown"
              multiple="true"
              
              >
                <option value="">Choose a Cuisine</option>
                <option value="american">American</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="chinese">Chinese</option>
                <option value="japanese">Japanese</option>
                <option value="thai">Thai</option>
                <option value="indian">Indian</option>
                <option value="pizza">Pizza</option>
                <option value="italian">Italian</option>
                <option value="mexican">Mexican</option>
                <option value="korean">Korean</option>
                <option value="latin-american">Latin American</option>
                <option value="caribbean">Caribbean</option>
                <option value="soul-food">Soul Food</option>
                <option value="bbq">BBQ</option>
                <option value="vietnamese">Vietnamese</option>
                <option value="other">Other</option>

            </select> */}
            <div id="cuisines">
              <h3>Choose a Cuisine</h3>
              { cuisines }

              {/* <input type="checkbox" id="american" name="american" value="American"></input>
                <label for="american">American</label> 
              <input type="checkbox" id="vegetarian" name="vegetarian" value="Vegetarian"></input>
                <label for="vegetarian">Vegetarian</label> <br/>
              <input type="checkbox" id="chinese" name="chinese" value="Chinese"></input>
                <label for="chinese">Chinese</label> 
              <input type="checkbox" id="japanese" name="japanese" value="Japanese"></input>
                <label for="japanese">Japanese</label> 
              <input type="checkbox" id="thai" name="thai" value="Thai"></input>
                <label for="thai">Thai</label> <br/>
              <input type="checkbox" id="indian" name="indian" value="Indian"></input>
                <label for="indian">Indian</label> 
              <input type="checkbox" id="italian" name="italian" value="Italian"></input>
                <label for="italian">Italian</label> 
              <input type="checkbox" id="pizza" name="pizza" value="Pizza"></input>
                <label for="pizza">Pizza</label> <br/>
              <input type="checkbox" id="mexican" name="mexican" value="Mexican"></input>
                <label for="mexican">Mexican</label> 
              <input type="checkbox" id="korean" name="korean" value="Korean"></input>
                <label for="korean">Korean</label> <br/>
              <input type="checkbox" id="latinamerican" name="Latin American" value="Latin-American"></input>
                <label for="latinamerican">Latin American</label> 
              <input type="checkbox" id="caribbean" name="caribbean" value="Caribbean"></input>
                <label for="caribbean">Caribbean</label> <br/>
              <input type="checkbox" id="soulfood" name="soulfood" value="Soulood"></input>
                <label for="soulfood">Soul Food</label> 
              <input type="checkbox" id="bbq" name="bbq" value="BBQ"></input>
                <label for="bbq">BBQ</label> 
              <input type="checkbox" id="korean" name="korean" value="Korean"></input>
                <label for="korean">Korean</label> <br/>
              <input type="checkbox" id="vietnamese" name="vietnamese" value="Vietnamese"></input>
                <label for="vietnamese">Vietnamese</label> 
              <input type="checkbox" id="other" name="other" value="Other"></input>
                <label for="other">Other</label>  */}

            </div>
            {/* {amenities drop down} */}
            <div id="amenities">
              <h3>Choose Amenities</h3>
            <input type="checkbox" id="curbside" name="curbside" value="curbside"></input>
              <label for="curbside">Curbside Pickup</label> <br/>
            <input type="checkbox" id="takeout" name="takeout" value="takeout"></input>
              <label for="takeout">Takeout</label> <br/>
            <input type="checkbox" id="patiodining" name="patiodining" value="patioDining"></input>
              <label for="patiodining">Patio Dining</label> <br/>
            <input type="checkbox" id="indoordining" name="indoordining" value="indoorDining"></input>
              <label for="indoordining">Indoor Dining</label> <br/>
            <input type="checkbox" id="delivery" name="delivery" value="delivery"></input>
              <label for="delivery">Delivery</label> <br/>
            </div>

            <button
              id="goButton"
              type="button"
              onClick={(e) => console.log(e)

              }>Go</button> 

          </div>
          <div className="login">

          </div>
       </>
     )
   }
 }


 export default connect(mapStateToProps, mapDispatchToProps)(MenuBox);