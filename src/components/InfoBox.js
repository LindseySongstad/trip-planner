const InfoBox = ({ info }) => {
    return (
        <div className="map-info">
            <h2>Location Info</h2>
            <ul>
                <li>Place <strong>{info.name}</strong></li>
                <li>State <strong>{info.state}</strong></li>
            </ul>
        </div>
    )
}

export default InfoBox