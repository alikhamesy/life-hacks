import React from 'react';
import TopNav from './TopNav';
import './Home.css'

function Home(props) {
    return (
        <div>
             <div id= "h">
            <h1>Foodenator</h1>
            </div>
            <TopNav onclickhandler={props.onclickhandler}/>
        
        </div>
    )
}

export default Home;