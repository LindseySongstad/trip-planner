import { Icon } from '@iconify/react';
import mapIcon from '@iconify-icons/map/map-pin';

const MapMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="map-marker" onClick={onClick}>
            <Icon icon={mapIcon} className="map-icon-icon" />
        </div>
    )
}

export default MapMarker

