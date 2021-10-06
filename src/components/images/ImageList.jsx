import React from 'react';
import Image from './Image';
import styles from './ImageList.module.scss';

const ImageList = () => {
  return (
    <div className={styles.ImageList}>
      <Image />
      <Image />
      <Image />
    </div>
  );
};

export default ImageList;
