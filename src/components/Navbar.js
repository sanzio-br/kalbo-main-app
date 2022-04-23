import { FiInstagram } from "react-icons/fi"
import { FaFacebookF } from "react-icons/fa"
import { AiFillPhone } from "react-icons/ai"
import { IoLogoWhatsapp } from "react-icons/io"
import React, { useState } from 'react';
import { Link } from "react-router-dom";
const Nav = () => {
    const [activeNav, setActiveNav] = useState("home")
    return (
        <header className={ window.scrollY > 100 ? "active" : ""}>
            <nav>
                <ul className='nav-links'>
                    <Link to='/'>
                        <li
                            id='link'
                            onClick={() => setActiveNav("home")}
                            className={activeNav === "home" ? "active" : ""}>Home
                        </li>
                    </Link>
                    <Link to='/About'>
                        <li
                            id='link'
                            onClick={() => setActiveNav("about")}
                            className={activeNav === "about" ? "active" : ""}>
                            About
                        </li>
                    </Link>
                    <Link to='/Events'>
                        <li
                            id='link'
                            onClick={() => setActiveNav("projects")}
                            className={activeNav === "projects" ? "active" : ""}>
                            Events
                        </li>
                    </Link>
                    <Link to='/Blogs'>
                        <li
                            id='link'
                            onClick={() => setActiveNav("services")}
                            className={activeNav === "services" ? "active" : ""}>
                            Blogs
                        </li>
                    </Link>
                    <Link to='/Contacts'>
                        <li
                            id='link'
                            onClick={() => setActiveNav("contacts")}
                            className={activeNav === "contacts" ? "active" : ""}>
                            Contacts
                        </li>
                    </Link>
                </ul>
                <ul id="icons">
                    <Link to="/"><AiFillPhone /></Link>
                    <Link to="/"><FiInstagram /></Link>
                    <Link to="/"><FaFacebookF /></Link>
                    <Link to="/"><IoLogoWhatsapp /></Link>
                    
                </ul>
            </nav>
        </header>
    )
}
export default Nav;