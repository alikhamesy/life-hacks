import React, {useState} from 'react'
import Home from './components/Home'
import Random from './components/Random'
import Custom from './components/Custom'
import './App.css'
 

function App() {
  let [bo, changeBo] = useState([true, false, false]);
  const onclickhandler = (event) => {
    let e = event.target.value;
    changeBo([e === 'home', e === 'random', e === 'custom']);
  }
  return (
    <div className="App">
      {bo[0] && <Home onclickhandler = {onclickhandler}/>}
      {bo[1] && <Random onclickhandler = {onclickhandler}/>}
      {bo[2] && <Custom onclickhandler = {onclickhandler}/>}
    </div>
  );
}
//AIzaSyAzkHe2byoAsUxx88kPQeKbn6h7_1BhQcA
export default App;
