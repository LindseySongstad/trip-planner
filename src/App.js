import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Places from './components/Places'
import AddPlace from './components/AddPlace'
import About from './components/About'
import FilterForm from './components/FilterForm'


function App() {
  const [showAddPlace, setShowAddPlace,] = useState(false)
  const [showFilter, setShowFilter,] = useState(false)
  const [places, setPlaces] = useState([])
  const [priority, setPriority] = useState('');

  useEffect(() => {
    const getPlaces = async () => {
      const placesFromServer = await fetchPlaces()
      setPlaces(placesFromServer)
    }
    getPlaces()
  }, [])

  //Fetch places
  const fetchPlaces = async () => {
    const res = await fetch('http://localhost:5000/places')
    const data = await res.json()

    return data
  }

  //Fetch place
  const fetchPlace = async (id) => {
    const res = await fetch(
      `http://localhost:5000/places/${id}`)
    const data = await res.json()

    return data
  }

  // Add Place
  const addPlace = async (place) => {
    const res = await fetch('http://localhost:5000/places', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(place)
    })

    const data = await res.json()

    setPlaces([...places, data])
  }

  // delete place
  const deletePlace = async (id) => {
    await fetch(`http://localhost:5000/places/${id}`, {
      method: 'DELETE'
    })

    setPlaces(places.filter((place) => place.id !== id))
  }

  // toggle booked
  const toggleBooked = async (id) => {
    const placeToToggle = await fetchPlace(id)
    const updPlace = {
      ...placeToToggle, booked:
        !placeToToggle.booked
    }

    const res = await fetch(`http://localhost:5000/places/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updPlace)
    })

    const data = await res.json()

    setPlaces(places.map((place) =>
      place.id === id ?
        { ...place, booked: data.booked }
        : place
    )
    )
  }

  // filtered places list
  const filteredPlaces =
    priority === '' || showFilter === false ? places
      : places.filter((place) => place.priority === priority);

  // when add button is clicked toggle add view
  const onAddClick = () => {
    if (showFilter) {
      setShowAddPlace(!showAddPlace);
      setShowFilter(false)
    } else { setShowAddPlace(!showAddPlace) }
  }
  // when filter button is clicked toggle filter view
  const onFilterClick = () => {
    if (showAddPlace) {
      setShowAddPlace(false);
      setShowFilter(!showFilter)
    } else { setShowFilter(!showFilter) }
  }

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={onAddClick}
          showAdd={showAddPlace}
          onFilter={onFilterClick}
          showFilter={showFilter}
        />
        <Route path='/' exact render={(props) => (
          <>
            {showAddPlace && <AddPlace onAdd={addPlace} />}
            {showFilter && <FilterForm
              changePriority={setPriority}
              priority={priority}
            />}
            {places.length > 0 ? (
              <Places
                places={filteredPlaces}
                onDelete={deletePlace}
                onToggle={toggleBooked}
              />
            ) : (
              'No places to show'
            )}
          </>
        )} />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
