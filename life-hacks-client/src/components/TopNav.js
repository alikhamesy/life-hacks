import React from 'react'
import './Home.css'
function TopNav(props) {
    const {onclickhandler} = props
    return (
        <div id="top-nav">
            <button id="Random" value='random' onClick={onclickhandler}>Random</button>
            <button id="Custom" value='custom' onClick={onclickhandler}>Custom</button>
         
        </div>
    )
}

export default TopNav;