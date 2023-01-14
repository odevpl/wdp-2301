import Button from '../../common/Button/Button';
import styles from './ProductsCompare.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

const ProductsCompare = ({ products, removeProductCompare }) => {
  if (products.length === 0) return null;
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.row}>
          <div className={styles.col_10}>
            <div className={styles.row}>
              {products.map(product => (
                <div key={product.id} className={styles.col_3}>
                  <div className={styles.image}>
                    <FontAwesomeIcon
                      onClick={() => removeProductCompare(product.id)}
                      className={styles.icon}
                      icon={faWindowClose}
                    />
                    {product.photo}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.col_2}>
            <Button className={styles.btn} variant={'outline'}>
              Compare
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductsCompare.propTypes = {
  products: PropTypes.array,
  removeProductCompare: PropTypes.func,
};

export default ProductsCompare;
