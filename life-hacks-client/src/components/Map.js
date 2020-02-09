/*global google*/
import React, {useState, useEffect} from 'react';
import {withGoogleMap, withScriptjs, GoogleMap, Marker} from "react-google-maps"

const Map = withScriptjs(withGoogleMap( props => {
  
  let [pos, changePos] = useState()
  let [place, changePlace] = useState()
  let map = React.createRef()
  let {reSearch, searchTerm = "food", radius = 5, changeRestaurant = () => {console.error("missing state updater")}} = props

  useEffect(() => {
    search();
  }, [searchTerm, radius, reSearch]);

  const search = () => {
    let {current} = map
    const service = new google.maps.places.PlacesService(current.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
    console.log(radius);
    const request = {
      location: pos,
      radius: radius*1000,
      name: searchTerm
    }
    service.nearbySearch(request, (res, stat) => {
      if(stat === google.maps.places.PlacesServiceStatus.OK){
        let newResturant = res[Math.round(Math.random()*(res.length-1))];
        changePlace(newResturant)
        let {name, vicinity} = newResturant
        changeRestaurant({name, location: vicinity })
      }
    })
  }
  if (navigator.geolocation && !pos) {
    navigator.geolocation.getCurrentPosition(position => {
      changePos({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    }, () => {
      console.error('Failed to get current location.')
    });
  }
  console.log(pos);
  return (
    <GoogleMap
      defaultZoom={10}
      center={pos}
      ref={map}
    >
      {place && <Marker key={0} position={{ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }} />}
    </GoogleMap>
  );

}))

export default Map