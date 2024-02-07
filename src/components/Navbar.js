import React from 'react';
import SwitchThemeButton from "./SwitchThemeButton";
import {ThemeContext} from "./context";

function Navbar(props) {
  const getNavbarClass = (theme) => {
    return theme === 'dark' ? 'is-dark' : 'is-white';
  };

  const getTitleClass = (theme) => {
    return theme === 'dark' ? 'has-text-white' : 'has-text-black';
  };

  return (
    <ThemeContext.Consumer>
      {({ value, update }) => (
        <nav className={`navbar ${getNavbarClass(value)}`} role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <div className="navbar-item">
              <h1 className={`title ${getTitleClass(value)}`}>TUDU' LIST</h1>
            </div>

            <button className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                    data-target="myNavbar">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>

          <div id="myNavbar" className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <SwitchThemeButton />
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    </ThemeContext.Consumer>
  )
}

export default Navbar;