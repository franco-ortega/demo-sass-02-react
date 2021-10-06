import React from 'react';
import styles from './LightBox.module.scss';

const LightBox = ({ color }) => {
  return (
    <div className={`${styles.LightBox} ${styles[color]}`}>
      <p><span>{color}</span> <span>Full Light</span> </p>
      <p><span>{color}</span> <span>High Light</span> </p>
      <p><span>{color}</span> <span>Mid Light</span> </p>
      <p><span>{color}</span> <span>Low Light</span> </p>
      <p><span>{color}</span> <span>No Light</span> </p>
    </div>
  )
};

export default LightBox;
