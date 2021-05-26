import { FaTimes } from 'react-icons/fa'

const Place = ({ place, onDelete, onToggle }) => {
    return (
        

        <div className={`priority${place.priority} place ${place.booked ? 'booked' : ''}` } onDoubleClick={()=> 
        onToggle(place.id)}>
            <h3>
                {place.name} 
                <FaTimes 
                    style={{color: 'red', cursor: 'pointer'}} 
                    onClick={() => onDelete(place.id)}
                />
            </h3>
            <p>{place.type}</p>
            <p>{place.priority}</p>
            <p>{place.state}</p>
        </div>
    )
}

export default Place
