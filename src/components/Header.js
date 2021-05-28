import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'


const Header = ({ title, onAdd, showAdd, onFilter, showFilter }) => {
    const location = useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
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

Header.defaultProps = {
    title: 'Trip Planner',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
