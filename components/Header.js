import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Action">Action</Link></li>
                <li><Link to="/Strategy">Strategy</Link></li>
                <li><Link to="/Fantasy">Fantasy</Link></li>
            </ul>
        </>
    )
}