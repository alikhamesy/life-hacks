import React, {useState} from 'react'
import Home from './components/Home'
import TopNav from './components/TopNav'
import './App.css'

function App() {
  let [bo, changeBo] = useState([true, false, false]);
  
  const onclickhandler = (event) => {
    let e = event.target.value;
    changeBo([e === 'home', e === 'random', e === 'custom']);
  }
  
  return (
    <div className="App">
      <TopNav onclickhandler={onclickhandler}/>
      {bo[0] && <Home/>}
      {/* <Random/>
      <Custom/> */}
    </div>
  );
}

export default App;
