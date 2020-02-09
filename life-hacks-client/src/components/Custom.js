import React from 'react';
import './Custom.css'

function Custom(props) {
    return (
        <div>
            <br></br>
            <p id = "words">Custom</p>
            <p class = "subwords" >Feeling picky?</p>
            <div  class="dropdown">
            <label id ="distance" for="distance">Pick the Cuisine</label>

                <select id="distance">
                <option value="Mexican">Mexican</option>
                <option value="Italian">Italian</option>
                <option value="Greek">Greek</option>
                <option value="French">French</option>
                <option value="Thai">Thai</option>
                <option value="Indian">Indian</option>
                <option value="Chinese">Chinese</option>z
                <option value="Japanese">Japanese</option>  
                <option value="Fast food">Fast Food</option>  
                <option value="Nothing">Nothing</option>  
                </select>
  
            </div>
            <div >

            </div>
            <form>

            </form>
            <button id = "back" value='home' onClick={props.onclickhandler}>Back</button>
            <button id="submit"> Submit</button>
            <br></br>
        </div>
    )
}

export default Custom;