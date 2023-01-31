import React from 'react';
import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <div className='container'>
      <div className={styles.banner}>
        <p className={styles.bannerOne}>
          BEDROOM <span>FURNITURE</span>
        </p>
        <p className={styles.bannerTwo}>
          ALWAYS <span>25%</span> OFF OR MORE
        </p>
      </div>
      <div className={styles.navigation}>
        <div className={styles.navigationWrapper}>
          <a href='Home'>Home</a>
          <span>&gt;</span>
          <a href='Furniture'>Furniture</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
