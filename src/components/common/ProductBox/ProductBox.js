import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavourite } from '../../../redux/productsRedux';
import Stars from '../Stars/Stars';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  userStars,
  photo,
  isFavourite,
  isComparable,
  oldPrice,
  id,
  addProductCompare,
  removeProductCompare,
  countProductsCompare,
}) => {
  const dispatch = useDispatch();
  const productId = id;
  const handleClick = e => {
    e.preventDefault();
    dispatch(toggleFavourite(productId));
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        {photo}
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <Stars stars={stars} userStars={userStars} id={id} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            variant='outline'
            onClick={handleClick}
            className={clsx(styles.buttonHover, isFavourite && styles.isActive)}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            onClick={e => {
              e.preventDefault();
              if (isComparable === false && countProductsCompare() < 4) {
                addProductCompare(id);
              } else {
                removeProductCompare(id);
              }
            }}
            variant='outline'
            className={`${isComparable === true ? `${styles.isComparable}` : ''}`}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        {oldPrice && <div className={styles.oldPrice}>$ {oldPrice}</div>}
        <div className={styles.price}>
          <Button noHover variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  userStars: PropTypes.number,
  photo: PropTypes.object,
  isFavourite: PropTypes.bool,
  isComparable: PropTypes.bool,
  oldPrice: PropTypes.number,
  id: PropTypes.string,
  addProductCompare: PropTypes.func,
  removeProductCompare: PropTypes.func,
  countProductsCompare: PropTypes.func,
};

export default ProductBox;
