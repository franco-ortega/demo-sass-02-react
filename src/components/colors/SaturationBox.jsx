import React from 'react';
import styles from './SaturationBox.module.scss';

const SaturationBox = ({ color }) => {
  const hsl = styles[color];

  return (
    <div className={`${styles.SaturationBox} ${hsl}`}>
      <p>{color} <br /> Full Sat </p>
      <p>{color} <br /> High Sat </p>
      <p>{color} <br /> Mid Sat </p>
      <p>{color} <br /> Low Sat </p>
      <p>{color} <br /> No Sat </p>
    </div>
  )
};

export default SaturationBox;
