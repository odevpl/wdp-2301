import React from 'react';
import styles from './FilterColor.module.scss';

const FilterColor = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'></div>
        <div className='col-4'>
          <div className={styles.root}>
            <h5>FILTER BY COLOR</h5>
            <hr />
            <ul>
              <li className={styles.active}>
                <div className={styles.red}></div>
                <h4>Red</h4>
              </li>
            </ul>
            <ul>
              <li>
                <div className={styles.black}></div>
                <h4>Black</h4>
              </li>
            </ul>
            <ul>
              <li>
                <div className={styles.yellow}></div>
                <h4>Yellow</h4>
              </li>
            </ul>
            <ul>
              <li>
                <div className={styles.blue}></div>
                <h4>Blue</h4>
              </li>
            </ul>
            <ul>
              <li>
                <div className={styles.pink}></div>
                <h4>Pink</h4>
              </li>
            </ul>
            <ul>
              <li>
                <div className={styles.green}></div>
                <h4>Green</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterColor;
