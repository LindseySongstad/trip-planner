import { useState } from 'react'
import Header from './components/Header'
import Places from './components/Places'
import AddPlace from './components/AddPlace'


function App() {
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

  // delete place
  const deletePlace = (id) => {
    setPlaces(places.filter((place) => place.id !== id))
  }

  // toggle favorite
  const togglefavorite = (id) => {
    console.log(id)
    setPlaces(places.map((place) =>
      place.id === id ?
        { ...place, favorite: !place.favorite }
        : place
      )
    )
  }

  return (
    <div className="container">
      <Header />
      <AddPlace />
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
