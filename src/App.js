import { useState } from 'react'
import Header from './components/Header'
import Places from './components/Places'
import AddPlace from './components/AddPlace'


function App() {
  const [showAddPlace, setShowAddPlace, ] = useState(false)

  const [places, setPlaces] = useState([
    {
      id: 1,
      name: 'Grand Canyon',
      state: 'Arizona',
      type: 'National Park',
      favorite: true,
    },
    {
      id: 2,
      name: 'Bryce Canyon',
      state: 'Utah',
      type: 'National Park',
      favorite: true,
    },
    {
      id: 3,
      name: 'Zion',
      state: 'Utah',
      type: 'National Park',
      favorite: false,
    }
  ])

  // Add Place
  const addPlace = (place) => {
    const id = Math.floor(Math.random() * 10000) +1
    const newPlace = {id, ...place}
    setPlaces([...places, newPlace])
  }
  
  // delete place
  const deletePlace = (id) => {
    setPlaces(places.filter((place) => place.id !== id))
  }

  // toggle favorite
  const togglefavorite = (id) => {
    setPlaces(places.map((place) =>
      place.id === id ?
        { ...place, favorite: !place.favorite }
        : place
      )
    )
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddPlace
        (!showAddPlace)} showAdd={showAddPlace}/>
      {showAddPlace && <AddPlace onAdd={addPlace}/>}
      {places.length > 0 ? (
        <Places
          places={places}
          onDelete={deletePlace}
          onToggle={togglefavorite}
        />
      ) : (
        'No places to show'
      )}
    </div>
  );
}

export default App;
