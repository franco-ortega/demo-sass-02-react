import React from 'react';
import styles from './Image.module.scss';

const Image = () => {
  return (
    <img
    className={styles.Image}
      src="https://placekitten.com/200/200"
      alt="cat"
    />
  )
};

export default Image;
