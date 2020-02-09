import React, {useState} from 'react';
import './Custom.css'
import Map from './Map';

function Custom(props) {
  let [cuisine, changeCuisine] = useState("Mexican Food")
  let [restaurant, changeRestaurant] = useState({})
  let [forceRender, changeForceRender] = useState(true)
  
  const cuisineChangeHandler = (event) => {
    changeCuisine(event.target.value);
  }

  return (
    <div>
      <br></br>
      <p id = "words">Custom</p>
      <p className = "subwords" >Feeling picky?</p>
      <div  className = "dropdown">
        <label id ="distance">Pick the Cuisine</label>
        <select id="distance" onChange={cuisineChangeHandler}>
          <option value="" disabled selected>Select:</option>
          <option value="Mexican Food">Mexican</option>
          <option value="Italian Food">Italian</option>
          <option value="Greek Food">Greek</option>
          <option value="French Food">French</option>
          <option value="Thai Food">Thai</option>
          <option value="Indian Food">Indian</option>
          <option value="Chinese Food">Chinese</option>z
          <option value="Japanese Food">Japanese</option>  
          <option value="Fast food Food">Fast Food</option>  
          <option value="Nothing Food">Nothing</option>  
        </select>
      </div>
      <button id = "back" value='home' onClick={props.onclickhandler}>Back</button>
      <button id="submit" onClick={() => {changeForceRender(!forceRender)}}> Search</button>
      {restaurant && <div id="location">
        <p>{restaurant.name}</p> 
        <p>{restaurant.location}</p>
      </div>}
      <Map 
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDW4JhfRLN5sZ3-wZUhb7Z5nyM2DT4wUIA&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        changeRestaurant={changeRestaurant}
        searchTerm={cuisine}
        reSearch={forceRender}
      />

    </div>
  )
}

export default Custom;