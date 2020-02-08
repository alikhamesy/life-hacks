import React from 'react';
import TopNav from './TopNav';

function Home(props) {
    return (
        <div>
            <p>Hello World</p>
            <p>Goodbye World!</p>
             <TopNav onclickhandler={props.onclickhandler}/>
        </div>
    )
}

export default Home;