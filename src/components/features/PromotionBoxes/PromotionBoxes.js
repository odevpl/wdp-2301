import React, { useState } from 'react';
import styles from '../PromotionBoxes/PromotionBoxes.module.scss';
import { useSelector } from 'react-redux';
import { getDeals } from '../../../redux/hotDealsRedux';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import {
  faExchangeAlt,
  faEye,
  faHeart,
  faShoppingBasket,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import Swipeable from '../../common/Swipeable/Swipeable';

const PromotionBoxes = () => {
  const hotDeals = useSelector(getDeals);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentProduct, setCurrentProduct] = useState(hotDeals[currentSlide]);

  const [currentHot, setCurrentHot] = useState(0);
  const [currentHotProduct, setCurrentHotProduct] = useState(hotDeals[currentHot]);

  const rightAction = () => {
    if (currentSlide < hotDeals.length - 1 && hotDeals[currentSlide + 1].photo) {
      setCurrentSlide(currentSlide + 1);
      setCurrentProduct(hotDeals[currentSlide + 1]);
    } else if (hotDeals[0].photo) {
      setCurrentSlide(0);
      setCurrentProduct(hotDeals[0]);
    }
  };

  const leftAction = () => {
    if (currentSlide > 0 && hotDeals[currentSlide - 1].photo) {
      setCurrentSlide(currentSlide - 1);
      setCurrentProduct(hotDeals[currentSlide - 1]);
    } else if (hotDeals[hotDeals.length - 1].photo) {
      setCurrentSlide(hotDeals.length - 1);
      setCurrentProduct(hotDeals[hotDeals.length - 1]);
    }
  };

  const rightHot = () => {
    if (currentHot < hotDeals.length - 1 && hotDeals[currentHot + 1].miniPhoto) {
      setCurrentHot(currentHot + 1);
      setCurrentHotProduct(hotDeals[currentHot + 1]);
    } else if (hotDeals[0].miniPhoto) {
      setCurrentHot(0);
      setCurrentHotProduct(hotDeals[0]);
    }
  };

  const leftHot = () => {
    if (currentHot > 0 && hotDeals[currentHot - 1].miniPhoto) {
      setCurrentHot(currentHot - 1);
      setCurrentHotProduct(hotDeals[currentHot - 1]);
    } else if (hotDeals[hotDeals.length - 1].miniPhoto) {
      setCurrentHot(hotDeals.length - 1);
      setCurrentHotProduct(hotDeals[hotDeals.length - 1]);
    }
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
            <div className={styles.header}>
              <div className={styles.leftCol}>
                <Button onClick={rightHot} leftAction={leftHot}>
                  <ul className={styles.nextHot}>
                    <li>
                      <a />
                    </li>
                    <li>
                      <a />
                    </li>
                    <li>
                      <a />
                    </li>
                  </ul>
                </Button>
                <h1>HOT DEALS</h1>
                <div className={styles.leftPhoto}>
                  <div className={styles.name}>
                    <img
                      src={currentHotProduct.miniPhoto}
                      alt={currentProduct.name}
                      className={styles.leftPhoto}
                    />
                    {currentProduct.name}
                  </div>
                  <div className={styles.addCart}>
                    <Button variant='small' className={styles.addToCart}>
                      <FontAwesomeIcon
                        className={styles.fontShop}
                        icon={faShoppingBasket}
                      />{' '}
                      ADD TO CART
                    </Button>
                  </div>
                  <div className={styles.endPromo}>
                    <div className={styles.timePromo}>
                      <p>
                        25<span>DAYS</span>
                      </p>
                      <p>
                        25<span>DAYS</span>
                      </p>
                      <p>
                        25<span>DAYS</span>
                      </p>
                      <p>
                        25<span>DAYS</span>
                      </p>
                    </div>
                  </div>
                  <div className={styles.outline}>
                    <Button className={styles.faIcon} variant='outline'>
                      <FontAwesomeIcon icon={faEye}>Quick view</FontAwesomeIcon>
                    </Button>
                    <Button className={styles.faIcon} variant='outline'>
                      <FontAwesomeIcon icon={faHeart}>Add to favorite</FontAwesomeIcon>
                    </Button>
                    <Button className={styles.faIcon} variant='outline'>
                      <FontAwesomeIcon icon={faExchangeAlt}>
                        Add to compare
                      </FontAwesomeIcon>
                    </Button>
                  </div>
                  <div className={styles.promotion}>
                    <span>${currentHotProduct.oldPrice}</span>
                    <Button className={styles.promotionBtn} variant='outline'>
                      ${currentHotProduct.price}
                    </Button>
                  </div>
                </div>
                <div className={styles.star}>
                  {[1, 2, 3, 4, 5].map(i => (
                    <span key={i} href='#'>
                      {i <= 2 ? (
                        <FontAwesomeIcon className={styles.stars} icon={faStar}>
                          {i} stars
                        </FontAwesomeIcon>
                      ) : (
                        <FontAwesomeIcon className={styles.stars} icon={farStar}>
                          {i} stars
                        </FontAwesomeIcon>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className='col'>
            <div className={styles.rightCol}>
              <img src={currentProduct.photo} alt='' className={styles.rightImg} />
              <div className={styles.slider}>
                <Swipeable
                  className={styles.swipe}
                  rightAction={rightAction}
                  leftAction={leftAction}
                />
                <div className={styles.rightTitle}>
                  <h1>
                    INDOOR <span>FURNITURE</span>
                  </h1>
                  <p>SAVE UP TO 50% OF ALL FURNITURE</p>
                </div>
              </div>
              <Button className={styles.shopNow}>SHOP NOW</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionBoxes;
