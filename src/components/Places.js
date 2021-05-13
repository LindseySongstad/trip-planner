import Place from './Place'

const Places = ({places, onDelete, onToggle}) => {  
    return (
        <>
            {places.map((place)=> (
                <Place 
                    key={place.id} 
                    place={place} 
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </>
    )
}

export default Places


