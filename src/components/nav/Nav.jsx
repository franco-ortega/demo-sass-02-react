import React from 'react';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <ul className={styles.Nav}>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  )
}

export default Nav;
