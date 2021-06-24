import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const center = {
  lat: 30,
  lng: -100
};

function Map() {
  return (
    <div className='map-container'>
      <LoadScript
        googleMapsApiKey=''

      >
        <GoogleMap
          mapContainerClassName='map'
          center={center}
          zoom={4.5}
        >
          { /* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default React.memo(Map)