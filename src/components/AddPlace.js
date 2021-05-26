import { useState } from 'react'

const AddPlace = ({ onAdd }) => {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [state, setState] = useState('')
    const [favorite, setFavorite] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            alert('Please add a place')
            return
        }

        onAdd({ name, type, state, favorite })

        setName('')
        setType('')
        setState('')
        setFavorite(false)
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
                <label htmlFor="">Favorite?</label>
                <input
                    type="checkbox"
                    checked={favorite}
                    value={favorite}
                    onChange={(e) => setFavorite(e.currentTarget.checked)}
                />
            </div>

            <input type="submit" value="Save Place"
                className='btn btn-block' />
        </form>
    )
}

export default AddPlace

