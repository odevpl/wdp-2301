import React from 'react';
import styles from './FilterSizes.module.scss';

const FilterSizes = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'></div>
        <div className='col-4'>
          <div className={styles.root}>
            <h5>FILTER BY SIZES</h5>
            <hr />
            <ul>
              <li className={styles.active}>
                <label>
                  <input className={styles.active} type='checkbox' />
                </label>
                <h4>S</h4>
                <span className={styles.productCount}>3</span>
              </li>
              <li>
                <label>
                  <input type='checkbox' />
                </label>
                <h4>M </h4>
                <span className={styles.productCount}>3</span>
              </li>
              <li>
                <label>
                  <input type='checkbox' />
                </label>
                <h4>L </h4>
                <span className={styles.productCount}>3</span>
              </li>
              <li>
                <label>
                  <input type='checkbox' />
                </label>
                <h4>XL </h4>
                <span className={styles.productCount}>3</span>
              </li>
              <li>
                <label>
                  <input type='checkbox' />
                </label>
                <h4>XXL </h4>
                <span className={styles.productCount}>3</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSizes;
