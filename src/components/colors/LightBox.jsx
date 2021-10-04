import React from 'react';
import styles from './LightBox.module.scss';

const LightBox = ({ color }) => {
  return (
    <div className={`${styles.LightBox} ${styles[color]}`}>
      <p><span>{color} <br /> Full Light</span> </p>
      <p><span>{color} <br /> High Light</span> </p>
      <p><span>{color} <br /> Mid Light</span> </p>
      <p><span>{color} <br /> Low Light</span> </p>
      <p><span>{color} <br /> No Light</span> </p>
    </div>
  )
};

export default LightBox;
