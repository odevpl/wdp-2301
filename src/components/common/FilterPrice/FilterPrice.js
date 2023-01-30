import React from 'react';
import styles from './FilterPrice.module.scss';
import Button from '../Button/Button';

const FilterPrice = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'></div>
        <div className='col-4'>
          <div className={styles.root}>
            <div>
              <h5>FILTER BY PRICE</h5>
              <hr />
              <input type='range' min={0} max={2000} />
              <br />
              <Button className={styles.btn}>FILTER</Button>
              <p className={styles.price}>$135 - $500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPrice;
