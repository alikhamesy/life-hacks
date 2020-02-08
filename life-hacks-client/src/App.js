import React, {useState} from 'react'
import  Home from './components/Home'
import './App.css'

function App() {
  let [bo, changeBo] = useState([true, false, false]);
  
  const onclickhandler = (event) => {
    let e = event.target.value;
    changeBo([e === 'home', e === 'random', e === 'custom']);
  }
  
  return (
    <div className="App">
       {bo[0] && <Home/>}
      <Home onclickhandler={onclickhandler}/>
     
      {/* <Random/>
      <Custom/> */}
    </div>
  );
}

export default App;
