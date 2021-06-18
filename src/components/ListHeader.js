
import Button from './Button'
import { useLocation } from 'react-router-dom'


const ListHeader = ({ onAdd, showAdd, onFilter, showFilter }) => {
    const location = useLocation()
    return (
        <header className='list-header'>
            <h1>Locations</h1>
            {location.pathname === '/' && (
                <div>
                    <Button
                        color={showAdd ? 'red' : 'green'}
                        text={showAdd ? 'Close' : 'Add'}
                        onClick={onAdd}
                    />
                    <Button
                        color={showFilter ? 'red' : 'green'}
                        text={showFilter ? 'Close' : 'Filter'}
                        onClick={onFilter}
                    />
                </div>
            )}
        </header>
    )
}

export default ListHeader
