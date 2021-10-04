import React from 'react';
import styles from './LightBox.module.scss';

const LightBox = ({ color }) => {
  return (
    <div className={`${styles.LightBox} ${styles[color]}`}>
      <p>{color} <br /> Full Light </p>
      <p>{color} <br /> High Light </p>
      <p>{color} <br /> Mid Light </p>
      <p>{color} <br /> Low Light </p>
      <p>{color} <br /> No Light </p>
    </div>
  )
};

export default LightBox;
