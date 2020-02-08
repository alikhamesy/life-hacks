import React from 'react'
import "../Home.css"

function Home(props) {
    const {onclickhandler} = props
    return (
        <div id="topNav">
    
            <h1>Foodenator</h1>
            <button id="Random" value='random' onClick={onclickhandler}>Random</button>
            <button id="Custom" value='custom' onClick={onclickhandler}>Custom</button>
            <button id="Home" value='home' onClick={onclickhandler}>Feedback</button>
            
        </div>
    )
}

export default Home