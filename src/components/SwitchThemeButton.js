import React from 'react';
import {ThemeContext} from "./context";

function SwitchThemeButton(props) {
  const getBackgroundClass = (theme) => {
    return theme === 'dark' ? 'is-white' : 'is-dark';
  };

  return (
    <ThemeContext.Consumer>
      {({value, update}) => (
        <button
          className={`switch button ${getBackgroundClass(value)}`}
          onClick={update}
        >
          Cambia Tema
        </button>
      )}
    </ThemeContext.Consumer>
  )
}

export default SwitchThemeButton;