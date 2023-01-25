import Button from '../../common/Button/Button';
import styles from './ProductsCompare.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose, faHeart } from '@fortawesome/free-solid-svg-icons';

const ProductsCompare = ({ products, removeProductCompare }) => {
  if (products.length === 0) return null;
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-10'>
            <div className='row'>
              {products.map(product => (
                <div key={product.id} className='col-3'>
                  <div className={styles.image}>
                    <FontAwesomeIcon
                      onClick={() => removeProductCompare(product.id)}
                      className={styles.icon}
                      icon={faWindowClose}
                    />
                    <h6>{product.name}</h6>
                    {product.photo}
                  </div>
                  <div className={'row ' + styles.content}>
                    <div className={'col ' + styles.price}>$ {product.price}</div>
                    <div className={'col ' + styles.favourite}>
                      {product.isFavourite === true && (
                        <div>
                          <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='col-2'>
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
