import React, { useState } from 'react';
import styles from '../PromotionBoxes/PromotionBoxes.module.scss';
import { useSelector } from 'react-redux';
import { getDeals } from '../../../redux/hotDealsRedux';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faEye,
  faHeart,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import Stars from '../../common/Stars/Stars';
import Swipeable from '../../common/Swipeable/Swipeable';

const PromotionBoxes = () => {
  const hotDeals = useSelector(getDeals);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentProduct, setCurrentProduct] = useState(hotDeals[currentSlide]);

  const rightAction = () => {
    if (currentSlide < hotDeals.length - 1 && hotDeals[currentSlide + 1].miniPhoto) {
      setCurrentSlide(currentSlide + 1);
      setCurrentProduct(hotDeals[currentSlide + 1]);
    } else if (hotDeals[0].miniPhoto) {
      setCurrentSlide(0);
      setCurrentProduct(hotDeals[0]);
    }
  };

  const leftAction = () => {
    if (currentSlide > 0 && hotDeals[currentSlide - 1].miniPhoto) {
      setCurrentSlide(currentSlide - 1);
      setCurrentProduct(hotDeals[currentSlide - 1]);
    } else if (hotDeals[hotDeals.length - 1].miniPhoto) {
      setCurrentSlide(hotDeals.length - 1);
      setCurrentProduct(hotDeals[hotDeals.length - 1]);
    }
  };

  const rightPhotoAction = () => {
    if (currentSlide < hotDeals.length - 1 && hotDeals[currentSlide + 1].photo) {
      setCurrentSlide(currentSlide + 1);
      setCurrentProduct(hotDeals[currentSlide + 1]);
    } else if (hotDeals[0].photo) {
      setCurrentSlide(0);
      setCurrentProduct(hotDeals[0]);
    }
  };

  const leftPhotoAction = () => {
    if (currentSlide > 0 && hotDeals[currentSlide - 1].photo) {
      setCurrentSlide(currentSlide - 1);
      setCurrentProduct(hotDeals[currentSlide - 1]);
    } else if (hotDeals[hotDeals.length - 1].photo) {
      setCurrentSlide(hotDeals.length - 1);
      setCurrentProduct(hotDeals[hotDeals.length - 1]);
    }
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
            <div className={styles.header}>
              <div className={styles.leftCol}>
                <div className={styles.leftTitle}>
                  <h1>HOT DEALS</h1>
                </div>
                {currentProduct.miniPhoto && (
                  <div className={styles.sliderOne}>
                    <Swipeable
                      className={styles.swipeOne}
                      leftPhotoAction={leftPhotoAction}
                      rightPhotoAction={rightPhotoAction}
                    />
                    <div className={styles.leftPhoto}>
                      <img
                        src={currentProduct.miniPhoto}
                        alt={currentProduct.name}
                        className={styles.leftPhoto}
                      />
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
                        <li>
                          <h1>
                            <span>25</span> DAYS
                          </h1>
                        </li>
                        <li>
                          <h1>
                            <span>10</span> HRS
                          </h1>
                        </li>
                        <li>
                          <h1>
                            <span>45</span> MINS
                          </h1>
                        </li>
                        <li>
                          <h1>
                            <span>30</span> SEC
                          </h1>
                        </li>
                      </div>
                      <div className={styles.name}>{currentProduct.name}</div>
                    </div>
                  </div>
                )}
                <div className={styles.stars}>
                  <Stars></Stars>
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
                  <span>${hotDeals[0].oldPrice}</span>
                  <Button className={styles.promotionBtn} variant='outline'>
                    ${hotDeals[0].price}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className='col'>
            <div className={styles.rightCol}>
              {currentProduct.photo && (
                <img
                  src={currentProduct.photo}
                  alt={currentProduct.name}
                  className={styles.rightImg}
                />
              )}
              <div className={styles.slider}>
                <Swipeable
                  className={styles.swipe}
                  rightAction={rightAction}
                  leftAction={leftAction}
                >
                  <div className={styles.rightTitle}>
                    <h1>
                      INDOOR <span>FURNITURE</span>
                    </h1>
                    <p>SAVE UP TO 50% OF ALL FURNITURE</p>
                  </div>
                </Swipeable>
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
