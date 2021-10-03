import React from 'react';
import styles from './SaturationBox.module.scss';

const SaturationBox = ({ color }) => {
  let hsl;
  
  if(color === 'Red') hsl = styles.Red;
  else if(color === 'Yellow') hsl = styles.Yellow;
  else if(color === 'Orange') hsl = styles.Orange;
  else if(color === 'Green') hsl = styles.Green;
  else if(color === 'Blue') hsl = styles.Blue;
  else if(color === 'Purple') hsl = styles.Purple;

  return (
    <div className={hsl}>
      <p>{color} <br /> Full Sat </p>
      <p>{color} <br /> High Sat </p>
      <p>{color} <br /> Mid Sat </p>
      <p>{color} <br /> Low Sat </p>
      <p>{color} <br /> No Sat </p>
    </div>
  )
};

export default SaturationBox;
