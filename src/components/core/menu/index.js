import React from 'react'
import {Link, withRouter} from 'react-router-dom'

const isActive = (history, path) => {
    console.log('History: ', history)
    let color = history.location.pathname === path ? '#ff9900' : '#ffffff'
    return {color: color}
}

const Menu = ({history}) => (
    <div>
        <ul className='nav nav-tabs bg-primary'>
            <li className='nav-item'>
                <Link className="nav-link" style={isActive(history, '/')} to='/'>Home</Link>
            </li>
            
            <li className='nav-item'>
                <Link className="nav-link" style={isActive(history, '/login')} to='/login'>Login</Link>
            </li>
            
            <li className='nav-item'>
                <Link className="nav-link" style={isActive(history, '/register')} to='/register'>Register</Link>
            </li>
            
        </ul>
    </div>
)

export default withRouter(Menu)