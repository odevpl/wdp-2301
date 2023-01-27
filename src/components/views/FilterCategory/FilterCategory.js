import React from 'react';
import styles from './FilterCategory.module.scss';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FilterCategory = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'></div>
        <div className='col-4'>
          <h5>FILTER BY CATEGORIES</h5>
          <hr />
          <div className={styles.root}>
            <ul>
              <li className={styles.active}>
                <FontAwesomeIcon icon={faAngleRight} />
                <h4>Furniture </h4>
                <span className={styles.productCount}>3</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faAngleRight} />
                <h4>Sofa </h4>
                <span className={styles.productCount}>3</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faAngleRight} />
                <h4>Chair </h4>
                <span className={styles.productCount}>3</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faAngleRight} />
                <h4>Table </h4>
                <span className={styles.productCount}>3</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faAngleRight} />
                <h4>Bedroom </h4>
                <span className={styles.productCount}>3</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCategory;
