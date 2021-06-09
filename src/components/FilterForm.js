

const FilterForm = ({ changePriority, priority }) => {
    
    const handleChange = (e) => {
        changePriority(e.target.value)
    }

    return (
        <div>
            <form className='add-form'>
                <div className='form-control'>
                    <label htmlFor="priority">Priority</label>
                    <select value={priority} onChange={handleChange}>
                        <option value="" defaultValue >All</option>
                        <option value="1" style={{ color: 'blue' }}>1 - Must See</option>
                        <option value="2" style={{ color: 'green' }}>2 - Probably</option>
                        <option value="3" style={{ color: 'yellow' }}>3 - Maybe</option>
                        <option value="4" style={{ color: 'orange' }}>4 - Maybe not</option>
                        <option value="5" style={{ color: 'red' }}>5 - Only with extra time</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default FilterForm
