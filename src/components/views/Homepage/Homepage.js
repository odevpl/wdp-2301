import React from 'react';
import styles from './Homepage.module.scss';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Feedback from '../../layout/Feedback/Feedback';
import Promotions from '../../layout/Promotions/Promotions';
import BrandBoxes from '../../features/BrandBoxes/BrandBoxes';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <Promotions />
    <NewFurniture />
    <BrandBoxes />
    <Feedback />
  </div>
);

export default Homepage;
