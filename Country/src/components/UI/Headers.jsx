import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
export const Headers = () => {
    const [show, setShow] = useState(false);
    const handleButtonToggle = () => {
       return setShow(!show);
    };
    return(
<div className="container">
    <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink to="/">
            <h1>Country-World</h1>
            </NavLink>
          </div>
          <nav className={show ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/About">About</NavLink>
              </li>
              <li>
                <NavLink to="/Country">Country</NavLink>
              </li>
              <li>
                <NavLink to="/Contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
            <RxHamburgerMenu />
            </button>
          </div>
        </div>
    </div>
    );
};