import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';
import { getAll } from '../../../redux/categoriesRedux';
import { useSelector } from 'react-redux';

const ProductSearch = () => {
  const categories = useSelector(getAll);

  return (
    <form action='' className={styles.root}>
      <div className={styles.category}>
        <FontAwesomeIcon className={styles.icon} icon={faListUl} />
        <ul>
          <li className={styles.visibleList}>
            <span className={styles.hide}>Select a category</span>
            {categories.map(category => (
              <ul className={styles.hiddenList} key={category.id}>
                <li className={styles.visibleCategory}>{category.name}</li>
              </ul>
            ))}
          </li>
        </ul>
        <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
      </div>
      <div className={styles.searchField}>
        <input placeholder='Search products...' type='text' />
        <a href={`${process.env.PUBLIC_URL}/search`}>
          <FontAwesomeIcon className={styles.icon} icon={faSearch} />
        </a>
      </div>
    </form>
  );
};

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
