import React from 'react';
import './Random.css'

function Random(props) {
    return (
        <div>
             
            <p id = "words">Random Shuffle</p>
            <p class = "subwords" >Can't decide what to eat?</p>
            <p  class = "subwords">Let us decide for you!</p>
            <div  class="dropdown">
            <label id ="distance" for="distance">Max Distance</label>

                <select id="distance">
                <option value="10km">10km</option>
                <option value="15km">15km</option>
                <option value="20km">20km</option>
                <option value="25km">25km</option>
                </select>
  
            </div>
            <form>

            </form>
            <button id = "back" value='home' onClick={props.onclickhandler}>Back</button>
            <button id="submit"> Submit</button>
           
        </div>
    )
}

export default Random;