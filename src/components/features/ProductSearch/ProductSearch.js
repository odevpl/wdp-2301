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
            Select a category
            {categories.map(category => (
              <ul className={styles.hiddenList} key={category.id}>
                <li className={styles.visibleCategory}>{category.name}
                  <ul className={styles.hiddenCategory}>
                    <li>{category.name} category</li>
                  </ul>
                </li>
              </ul>
            ))}
          </li>
        </ul>
        <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
      </div>
      <div className={styles.searchField}>
        <input placeholder='Search products...' type='text' />
        <button>
          <FontAwesomeIcon className={styles.icon} icon={faSearch} />
        </button>
      </div>
    </form>
  );};

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
