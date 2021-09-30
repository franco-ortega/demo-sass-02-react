import React from 'react';
import Nav from '../nav/Nav';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.Header}>
      <h1>Hello Sass and React!</h1>
      <Nav />
    </div>
  )
}

export default Header;
