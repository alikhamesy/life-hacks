/*global google*/
import React, {useState} from 'react';
import {withGoogleMap, withScriptjs, GoogleMap, Marker} from "react-google-maps"

const Map = withScriptjs(withGoogleMap( props => {
  
  let [pos, changePos] = useState({lat: 0, lng: 0})
  let [place, changePlace] = useState()
  let map = React.createRef()
  let {searchTerm = "food", radius = 5, changeRestaurant = () => {console.error("missing state updater")}} = props
  
  const search = () => {
    let {current} = map
    const service = new google.maps.places.PlacesService(current.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
    const request = {
      location: pos,
      radius: radius*1000,
      name: searchTerm
    }
    service.nearbySearch(request, (res, stat) => {
      if(stat === google.maps.places.PlacesServiceStatus.OK){
        let newResturant = res[Math.round(Math.random()*(res.length-1))];
        changeRestaurant(newResturant)
        changePlace(newResturant)
      }
    })
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      changePos({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    }, () => {
      console.error('Failed to get current location.')
    });
  }else{
    console.error('Browser does not support location services.')
  }
  
  return (<GoogleMap
    defaultZoom={10}
    center={pos}
    ref={map}
    onBoundsChanged={search}
  >
    {/* {places && <Marker key={19} position={{ lat: places[19].geometry.location.lat(), lng: places[19].geometry.location.lng() }} />} */}
    {place && <Marker key={0} position={{ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }} />}
  </GoogleMap>)

}))

export default Map