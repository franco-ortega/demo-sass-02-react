import React from 'react';
import styles from './Colors.module.scss';
import SaturationBox from './SaturationBox';

const Colors = () => {
  return (
    <footer className={styles.Colors}>
      <h2>Colors!!!!</h2>
      <SaturationBox color={'Red'} />
      <SaturationBox color={'Yellow'} />
      <SaturationBox color={'Orange'} />
      <SaturationBox color={'Green'} />
      <SaturationBox color={'Blue'} />
      <SaturationBox color={'Purple'} />

    </footer>
  )
};

export default Colors;
