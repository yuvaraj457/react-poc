import React from 'react'
import{ Link }from 'react-router-dom'; 
export default function Nav() {
    return (
        <div>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                    </ul>
                </nav>
                <hr/>
        </div>
    )
}
