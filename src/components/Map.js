import { useState } from "react";
import React from "react";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const libraries = ["places"];

const center = {
  lat: 30,
  lng: -100,
};

const Map = ({ places }) => {
  const [selected, setSelected] = useState(null)

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCPNbJMxsZXKNpXDCz0Pv2iA_jc6R6Nlqs',
    libraries,
  });
  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div className='map-container'>
      <GoogleMap
        mapContainerClassName='map'
        zoom={4}
        center={center} 
      >
        {places.map((place) => {
          if (place.lat) {
            return <Marker
              key={place.id}
              position={{ lat: place.lat, lng: place.lng }}

              onClick={() => {
                setSelected(place);
              }} />
          }
          return null
        })}

        {selected ? (<InfoWindow
          position={{ lat: selected.lat, lng: selected.lng }}
          onCloseClick={()=>setSelected(null)}
          >
          <div>
            <h2>{selected.name}</h2>
            <p>{selected.type}</p>
          </div>
        </InfoWindow>) : null}

      </GoogleMap>
    </div>
  )
}

export default Map

