import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import MapMarker from './MapMarker'
import InfoBox from './InfoBox'


const Map = ({ center, zoom, places }) => {
    const [selected, setSelected] = useState(null)

    const markers = places.map((place) => {
        if (place.lat) {
            return <MapMarker key={place.id} lat={place.lat} lng={place.lng} onClick={() => setSelected({ name: place.name })} />
        }
        return null
    })

    return (

        <div className='map-container'>
            <div className='map'>
                <GoogleMapReact

                    bootstrapURLKeys={{ key: 'AIzaSyCPNbJMxsZXKNpXDCz0Pv2iA_jc6R6Nlqs' }}
                    defaultCenter={center}
                    defaultZoom={zoom}
                >
                    {markers}
                    
                </GoogleMapReact>
                {selected && <InfoBox info={selected} />}
            </div>

        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 40.0,
        lng: -100.0
    },
    zoom: 4.5
}

export default Map;
