import React from 'react';
import { useToggle } from './useToggle'
import { useState } from 'react'
import F_1 from './questions/first_questions'
import styles from'./App.module.css';
import Game from './game'
import Scale from './scale'
import { ThemeContext } from './themes/Themes'
import { ThemeProvider } from './themes/Themes'
// const[state,toggle]=useToggle(true)



function App() {
  const { theme, toggle, dark } = React.useContext(ThemeContext)
return(
  <div  >
  <label className={styles.switch}>
  <input 
  onClick={toggle}
  style={{
    backgroundColor: theme.backgroundColor,
    color: theme.color,
    outline: 'none'
  }} type="checkbox"
  className={styles.cb}  />
  <span className={styles.toggle}>
    <span className={styles.left}>off</span>
    <span className={styles.right}>on</span>
  </span>
</label>
  <Game />
  </div>

)
}

export default App;
