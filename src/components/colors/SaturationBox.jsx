import React from 'react';
import styles from './SaturationBox.module.scss';

const SaturationBox = ({ color }) => {
  return (
    <div className={`${styles.SaturationBox} ${styles[color]}`}>
      <p>{color} <br /> Full Saturation </p>
      <p>{color} <br /> High Saturation </p>
      <p>{color} <br /> Mid Saturation </p>
      <p>{color} <br /> Low Saturation </p>
      <p>{color} <br /> No Saturation </p>
    </div>
  )
};

export default SaturationBox;
