import React, {useState} from 'react';
import Map from './Map';
import './Random.css'

function Random(props) {
    let [radius, changeRadius] = useState();
    let [restaurant, changeRestaurant] = useState({})
    let [forceRender, changeForceRender] = useState(true);
    
    const onRadiusUpdate = (event) => {
        changeRadius(event.target.value);
        console.log(event.target.value);
    }

    return (
        <div class='view'>
            <br></br>
            <p id = "words">Random Shuffle</p>
            <p className = "subwords" >Can't decide what to eat?</p>
            <p  className = "subwords">Let us decide for you!</p>
            <div  className ="dropdown">
            <label id ="distance" for="distance">Max Distance</label>
            <select id="distance" onChange={onRadiusUpdate}>
                <option value="10">10km</option>
                <option value="15">15km</option>
                <option value="20">20km</option>
                <option value="25">25km</option>
            </select>
            </div>
            <button id = "backs" value='home' onClick={props.onclickhandler}>Back</button>
            <button id="submit" onClick={() => {changeForceRender(!forceRender)}}>Search</button>
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
                radius={radius}
                reSearch={forceRender}
            />
            <br></br>
        </div>
    )
}

export default Random;