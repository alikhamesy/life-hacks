import React, {useState} from 'react'
import Home from './components/Home'
import TopNav from './components/TopNav'
import Map from './components/Map'
import './App.css'

function App() {
  let [bo, changeBo] = useState([true, false, false]);
  
  const onclickhandler = (event) => {
    let e = event.target.value;
    changeBo([e === 'home', e === 'random', e === 'custom']);
  }
  return (
    <div className="App">
      <Map 
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDW4JhfRLN5sZ3-wZUhb7Z5nyM2DT4wUIA&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        searchTerm="Mexican Food"
      />
      <TopNav onclickhandler={onclickhandler}/>
      {bo[0] && <Home/>}
      {/* <Random/>
      <Custom/> */}
    </div>
  );
}
//AIzaSyAzkHe2byoAsUxx88kPQeKbn6h7_1BhQcA
export default App;
