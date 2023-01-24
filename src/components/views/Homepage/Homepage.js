import React from 'react';
import styles from './Homepage.module.scss';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Feedback from '../../layout/Feedback/Feedback';
import Promotions from '../../layout/Promotions/Promotions';
import BrandBoxes from '../../features/BrandBoxes/BrandBoxes';
import LatestBlog from '../../features/LatestBlog/LatestBlogContainer';
import Gallery from '../../features/Gallery/Gallery';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <Promotions />
    <NewFurniture />
    <Gallery />
    <LatestBlog />
    <BrandBoxes />
    <Feedback />
  </div>
);

export default Homepage;
