import { useState } from 'react'

const AddPlace = ({ onAdd }) => {
    const [name, setName] = useState('')
    const [priority, setPriority] = useState('')
    const [type, setType] = useState('')
    const [state, setState] = useState('')
    const [booked, setBooked] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            alert('Please add a place')
            return
        }

        onAdd({ name, priority, type, state, booked })

        setName('')
        setPriority('')
        setType('')
        setState('')
        setBooked(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor="">Place</label>
                <input type="text"
                    placeholder='Add Place'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label htmlFor="priority">Priority</label>
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="" disabled selected hidden>Add Priority</option>
                    <option value="1" style={{color: 'blue'}}>1 - Must See</option>
                    <option value="2" style={{color: 'green'}}>2 - Probably</option>
                    <option value="3" style={{color: 'yellow'}}>3 - Maybe</option>
                    <option value="4" style={{color: 'orange'}}>4 - Maybe not</option>
                    <option value="5" style={{color: 'red'}}>5 - Only with extra time</option>
                </select>
            </div>
            <div className='form-control'>
                <label htmlFor="type">Type</label>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="" disabled selected hidden>Add Type</option>
                    <option value="National Park">National Park</option>
                    <option value="City">City</option>
                    <option value="RV Park">RV Park</option>
                    <option value="Attraction">Attraction</option>
                </select>
            </div>
            <div className='form-control'>
                <label htmlFor="">State</label>
                <input
                    type="text"
                    placeholder='Add State'
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label htmlFor="">Booked?</label>
                <input
                    type="checkbox"
                    checked={booked}
                    value={booked}
                    onChange={(e) => setBooked(e.currentTarget.checked)}
                />
            </div>

            <input type="submit" value="Save Place"
                className='btn btn-block' />
        </form>
    )
}

export default AddPlace

