import React from 'react';
import TopNav from './TopNav';
import './Home.css'

function Home(props) {
    return (
        <div>
            <h1>Foodenator</h1>
            <TopNav onclickhandler={props.onclickhandler}/>
        
        </div>
    )
}

export default Home;