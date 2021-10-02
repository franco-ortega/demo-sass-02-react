import React from 'react';

const SaturationBox = ({ color }) => {
  return (
    <div>
      <p>{color} <br /> Full Sat </p>
      <p>{color} <br /> High Sat </p>
      <p>{color} <br /> Mid Sat </p>
      <p>{color} <br /> Low Sat </p>
      <p>{color} <br /> No Sat </p>
    </div>
  )
};

export default SaturationBox;
