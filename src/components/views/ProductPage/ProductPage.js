import React from 'react';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import ReviewSection from '../ReviewSection/ReviewSection';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';

const ProductPage = () => (
  <div className={styles.root}>
    <NewFurniture countProducts={4} variant='productPage' />
    <ReviewSection />
  </div>
);

// ProductPage.propTypes = {};

export default ProductPage;
