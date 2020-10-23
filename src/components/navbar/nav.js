import React from 'react';
import { Link } from 'react-router-dom';

function nav() {
    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link style={navStyle} to='/about'>
                <li>About</li>
                </Link>
                <Link style={navStyle} to='/contactus'>

                <li>Contact Us</li>
                </Link>
                
                <li>Sign Up</li>
                <li>Login</li>
            </ul>
        </nav>
    )
}

export default nav
