import React from 'react';
import styles from './Colors.module.scss';
import LightBox from './LightBox';
import SaturationBox from './SaturationBox';

const Colors = () => {
  return (
    <footer className={styles.Colors}>
      <h2>Colors!!!!</h2>
      <section>
        <div>
          <SaturationBox color={'Red'} />
          <SaturationBox color={'Yellow'} />
          <SaturationBox color={'Orange'} />
          <SaturationBox color={'Green'} />
          <SaturationBox color={'Blue'} />
          <SaturationBox color={'Purple'} />
        </div>
        <hr style={{margin: '2vw'}} />
        <div>
          <LightBox color={'Red'} />
          <LightBox color={'Yellow'} />
          <LightBox color={'Orange'} />
          <LightBox color={'Green'} />
          <LightBox color={'Blue'} />
          <LightBox color={'Purple'} />
        </div>
      </section>
    </footer>
  )
};

export default Colors;
