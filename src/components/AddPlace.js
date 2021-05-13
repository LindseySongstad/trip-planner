import { useState } from 'react'

const AddPlace = () => {
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label htmlFor="">Place</label>
                <input type="text" placeholder='Add Place' />
            </div>
            <div className='form-control'>
                <label htmlFor="">Type</label>
                <input type="text" placeholder='Add Type' />
            </div>
            <div className='form-control'>
                <label htmlFor="">State</label>
                <input type="text" placeholder='Add State' />
            </div>
            <div className='form-control'>
                <label htmlFor="">Favorite?</label>
                <input type="checkbox" />
            </div>

            <input type="submit" value="Save Place"/>
        </form>
    )
}

export default AddPlace

