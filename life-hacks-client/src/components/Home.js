import React from 'react';
import TopNav from './TopNav';

function Home(props) {
    return (
        <div>
             <TopNav onclickhandler={props.onclickhandler}/>
            <p>Hello World</p>
            <p>Goodbye World!</p>
        </div>
    )
}

export default Home;