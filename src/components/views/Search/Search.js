import React from 'react';
import styles from './Search.module.scss';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

const Search = () => (
  <div className={styles.root}>
    <NewFurniture countProducts={12} />
  </div>
);

export default Search;
