import { useState } from 'react'

const FilterForm = ({ onFilter }) => {
    const [priority, setPriority] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()

        onFilter({ priority })


    }

    return (
        <div>
            <p>Filter page</p>
            <form className='add-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label htmlFor="priority">Priority</label>
                    <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option value="" disabled defaultValue hidden>Priority</option>
                        <option value="1" style={{ color: 'blue' }}>1 - Must See</option>
                        <option value="2" style={{ color: 'green' }}>2 - Probably</option>
                        <option value="3" style={{ color: 'yellow' }}>3 - Maybe</option>
                        <option value="4" style={{ color: 'orange' }}>4 - Maybe not</option>
                        <option value="5" style={{ color: 'red' }}>5 - Only with extra time</option>
                    </select>
                </div>
                <input type="submit" value="Filter"
                    className='btn btn-block' />
            </form>

        </div>
    )
}

export default FilterForm
