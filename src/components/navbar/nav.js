import React from 'react';
import { Link } from 'react-router-dom';

function nav() {
    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <Link to='/'><h3>Logo</h3></Link>
            
            <ul className="nav-links">
                <Link style={navStyle} to='/about'>
                <li>About</li>
                </Link>
                <Link style={navStyle} to='/contactus'>

                <li>Contact Us</li>

                </Link>
                 <Link style={navStyle} to='/Signup'>
                <li>Sign Up</li>
                </Link>

                <Link style={navStyle} to='/Login'>
                <li>Login</li>
                </Link>
            </ul>
        </nav>
    )
}

export default nav
