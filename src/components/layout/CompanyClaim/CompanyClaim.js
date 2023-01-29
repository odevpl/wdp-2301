import React from 'react';
import styles from './CompanyClaim.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { getCount } from '../../../redux/cartRedux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CompanyClaim = () => {
  const countingCartProducts = useSelector(getCount);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={`row align-items-center ${styles.positionRelative}`}>
          <div className={`col text-left ${styles.phoneNumber}`}>
            <p>
              <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} /> 2300 - 3560
              - 222
            </p>
          </div>
          <div className='col text-center'>
            <a href='/'>
              <img src='/images/logo.png' alt='Bazar' />
            </a>
          </div>
          <div className={`col text-right ${styles.cart}`}>
            <a href='#' className={styles.cartBox}>
              <Link to={'/cart'} className={styles.cartBox}>
                <div className={styles.cartIcon}>
                  <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
                </div>
              </Link>
              <div className={styles.cartCounter}>{countingCartProducts}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyClaim;
