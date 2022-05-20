import {useState} from 'react'
import { NavbarBrand } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import logo from '../images/logo 0.5.PNG'
//Pages
export default function Topbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <Link exact to="/kalbo-main-app" className="nav-logo">
          <div className="avatar">
                        <img src={logo} title="" alt="" />
                      </div>
            <NavbarBrand>Kalbo Adventure</NavbarBrand>  
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/kalbo-main-app"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/kalbo-main-app/About"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/kalbo-main-app/Tours"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Tours
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/kalbo-main-app/Blogs"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/kalbo-main-app/Contacts"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  );
}