import React from 'react';
import { useSelector } from 'react-redux';
import { getAllPromotions } from '../../../redux/productsRedux';
import styles from './Promotions.module.scss';

const Promotions = () => {
  const promotions = useSelector(getAllPromotions);

  return (
    <div className={styles.promotions}>
      <div
        className={
          styles.wrapper +
          styles.noppading +
          ' col-6 col-md-6 col-sm-12 col-lg-6 col-xl-6'
        }
      >
        <div className={styles.box1}>
          {promotions[0].photo}
          <p className={styles.titleOfPromotion}>
            {promotions[0].title} <br></br>
            <span className={styles.description}>{promotions[0].description}</span>
          </p>
          <p className={styles.valueOfPromotion}>{promotions[0].value}</p>
        </div>
      </div>

      <div
        className={
          styles.wrapper +
          styles.noppading +
          ' col-6 col-md-6 col-sm-12 col-lg-6 col-xl-6'
        }
      >
        <div className={styles.box2 + ' col-12' + styles.noppading}>
          {promotions[1].photo}
          <p className={styles.titleOfPromotionBox2}>
            {promotions[1].title}
            <br></br>
            <span className={styles.descriptionBox2}>{promotions[1].description}</span>
          </p>
          <p className={styles.valueOfPromotionBox2}>{promotions[1].value}</p>
        </div>

        <div className={styles.box2 + ' col-12' + styles.noppading}>
          {promotions[2].photo}
          <p className={styles.titleOfPromotionBox3}>
            {promotions[2].title}
            <br></br>
            <span className={styles.descriptionBox3}>{promotions[2].description}</span>
          </p>
          <p className={styles.valueOfPromotionBox3}>{promotions[2].value}</p>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
