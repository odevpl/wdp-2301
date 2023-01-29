import React from 'react';
import FilterCategory from '../FilterCategory/FilterCategory';
import BrandBoxes from '../../features/BrandBoxes/BrandBoxes';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

const ProductList = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col'>Banner</div>
        </div>
        <div className='row'>
          <div className='col-8'>
            <NewFurniture countProducts={12} />
          </div>
          <div className='col-4'>
            <FilterCategory className={styles.filter} />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <BrandBoxes />
          </div>
        </div>
      </div>
    </div>
  );
};

// ProductList.propTypes = {};

export default ProductList;
