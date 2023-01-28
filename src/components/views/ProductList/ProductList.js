import React from 'react';
import FilterCategory from '../FilterCategory/FilterCategory';
import BrandBoxes from '../../features/BrandBoxes/BrandBoxes';
// import PropTypes from 'prop-types';
//import styles from './ProductList.module.scss';

const ProductList = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>Banner</div>
      </div>
      <div className='row'>
        <div className='col-9'>Product List</div>
        <div className='col-3'></div>
        <FilterCategory />
      </div>
      <div className='row'>
        <div className='col'>
          <BrandBoxes />
        </div>
      </div>
    </div>
  );
};

// ProductList.propTypes = {};

export default ProductList;
