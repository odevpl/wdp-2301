import React from 'react';
import FilterCategory from '../FilterCategory/FilterCategory';
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
        <div className='col-3'>Filters</div>
        <FilterCategory />
      </div>
      <div className='row'>
        <div className='col'>Brands</div>
      </div>
    </div>
  );
};

// ProductList.propTypes = {};

export default ProductList;
