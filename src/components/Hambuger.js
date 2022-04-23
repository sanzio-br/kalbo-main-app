import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Hambuger() {
    const [active, setActive] = useState(false)
    function toggle() {
        setActive(prevState => !prevState)
    }
    return (
        <div className='header'>
            <div className="nav-list">
                <div onClick={toggle} className={active ? "active" : ""} id='hambuger'><div className="bar"></div></div>
                <ul onClick={toggle} className={active ? "active" : ""}>
                    <Link to='/'>
                        <li
                        id='#nav-link'
                            onClick={toggle} className={active ? "active" : ""}>
                            <a onClick={toggle} className={active ? "active" : ""} href="/" >HOME</a>
                        </li>
                    </Link>
                    <Link to='/About'>
                        <li
                        id='#nav-link'
                            onClick={toggle} className={active ? "active" : ""}>
                                <a onClick={toggle} className={active ? "active" : ""} href="/About">About</a>
                        </li>
                    </Link>
                    <Link to='/Events'>
                        <li
                            id='#nav-link'
                            onClick={toggle} className={active ? "active" : ""}>
                                <a onClick={toggle} className={active ? "active" : ""} href="/Events">Events</a>
                        </li>
                    </Link>
                    <Link to='/Blogs'>
                        <li onClick={toggle} className={active ? "active" : ""}>
                            <a onClick={toggle} className={active ? "active" : ""} href="/Blogs">Blogs</a>
                        </li>
                    </Link>
                    <Link to='/Contacts'>
                        <li
                            onClick={toggle} className={active ? "active" : ""}>
                                <a onClick={toggle} className={active ? "active" : ""} href="/Contacts">Contacts</a>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}