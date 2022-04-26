import React, { useState, useRef, useEffect } from "react";
import { links, social } from "./data";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  const [active, setActive] = useState(false)
    function toggle() {
        setActive(prevState => !prevState)
    }
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <button
            className="nav-toggle"
            onClick={() => {
              console.log("click");
              setShowLinks(!showLinks);
            }}
          >
            <div onClick={toggle} className={active ? "active" : ""} id='hambuger'><div className="bar"></div></div>
          </button>
        </div>

        <div className={`links-container ${active ? "active" : ""}`}
         onClick={toggle} ref={linksContainerRef} >
          <ul  ref={linksRef} className={`links ${active ? "active" : ""}`}
         onClick={toggle}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id} onClick={toggle} className={active ? "active" : ""}>
                  <Link onClick={toggle} className={active ? "active" : ""} to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((socailIcon) => {
            const { id, url, icon } = socailIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
