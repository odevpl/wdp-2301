import React from 'react';
import PropTypes from 'prop-types';
import ProductSearch from '../../features/ProductSearch/ProductSearch';
import styles from './MenuBar.module.scss';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuBar = ({ children }) => {
  const [navExpanded, setNavExpanded] = useState(true);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className={'col ' + styles.search}>
            <ProductSearch />
          </div>
          <button
            className={'col ' + styles.hamburger}
            onClick={() => {
              setNavExpanded(!navExpanded);
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className={navExpanded ? 'col ' + styles.menu : styles.menuExpanded}>
            <ul>
              <li>
                <a href='/' className={styles.active}>
                  Home
                </a>
              </li>
              <li>
                <a href='/shop/furniture'>Furniture</a>
              </li>
              <li>
                <a href='/shop/chair'>Chair</a>
              </li>
              <li>
                <a href='/shop/table'>Table</a>
              </li>
              <li>
                <a href='/shop/sofa'>Sofa</a>
              </li>
              <li>
                <a href='/shop/bedroom'>Bedroom</a>
              </li>
              <li>
                <a href='/blog'>Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
