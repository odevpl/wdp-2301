import React, { useState, useEffect } from 'react';
import styles from '../PromotionBoxes/PromotionBoxes.module.scss';
import { useSelector } from 'react-redux';
import { getDeals } from '../../../redux/hotDealsRedux';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import {
  faExchangeAlt,
  faEye,
  faHeart,
  faShoppingBasket,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import Swipeable from '../../common/Swipeable/Swipeable';
import { getHotDeal } from '../../../redux/productsRedux';

const PromotionBoxes = () => {
  const hotDeals = useSelector(getDeals);
  const products = useSelector(getHotDeal);
  const pagesCountLeft = products.length;
  const [activePageLeft, setActivePageLeft] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [fadeLeft, setFadeLeft] = useState(true);
  const pagesCountRight = hotDeals.length;
  const [activePageRight, setActivePageRight] = useState(0);
  const [fadeRight, setFadeRight] = useState(true);

  const handlePageChange = newPage => {
    setFadeLeft(false);
    setTimeout(() => {
      setActivePageLeft(newPage);
      setFadeLeft(true);
    }, 300);
    setIsClicked(true);
  };

  const dots = [];
  for (let i = 0; i < pagesCountLeft; i++) {
    dots.push(
      <li key={dots}>
        <a
          onClick={() => handlePageChange(i)}
          className={i === activePageLeft ? styles.active : ''}
        >
          page {i}
        </a>
      </li>
    );
  }

  const changeSlide = () => {
    setFadeLeft(false);
    setTimeout(() => {
      setActivePageLeft(activePageLeft + 1);
      if (activePageLeft >= pagesCountLeft - 1) {
        setActivePageLeft(0);
      }
      setFadeLeft(true);
    }, 300);
  };

  useEffect(() => {
    if (isClicked === false) {
      const interval = setInterval(changeSlide, 3000);
      return () => clearInterval(interval);
    } else {
      const interval = setInterval(changeSlide, 10000);
      setIsClicked(false);
      return () => clearInterval(interval);
    }
  }, [activePageLeft]);

  const leftAction = e => {
    e.preventDefault();
    setFadeRight(false);
    setTimeout(() => {
      if (activePageRight === 0) {
        setActivePageRight(pagesCountRight - 1);
      } else {
        setActivePageRight(activePageRight - 1);
      }
      setFadeRight(true);
    }, 300);
  };

  const rightAction = e => {
    e.preventDefault();
    setFadeRight(false);
    setTimeout(() => {
      if (activePageRight === pagesCountRight - 1) {
        setActivePageRight(0);
      } else {
        setActivePageRight(activePageRight + 1);
      }
      setFadeRight(true);
    }, 300);
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
            <div className={styles.header}>
              <div className={styles.leftCol}>
                <div className={styles.dots}>
                  <ul>{dots}</ul>
                </div>
                <h1>HOT DEALS</h1>

                <div className={fadeLeft ? styles.fadeIn : styles.fadeOut}>
                  {products.slice(activePageLeft, activePageLeft + 1).map(product => (
                    <div key={product.id}>
                      <div className={styles.leftPhoto}>
                        <div className={styles.name}>
                          {product.photo}
                          {product.name}
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
                            <FontAwesomeIcon icon={faHeart}>
                              Add to favorite
                            </FontAwesomeIcon>
                          </Button>
                          <Button className={styles.faIcon} variant='outline'>
                            <FontAwesomeIcon icon={faExchangeAlt}>
                              Add to compare
                            </FontAwesomeIcon>
                          </Button>
                        </div>
                        <div className={styles.promotion}>
                          {product.oldPrice && <span>${product.oldPrice}</span>}
                          <Button className={styles.promotionBtn} variant='outline'>
                            ${product.price}
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
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className='col-12 col-sm-12 col-md-6 col-lg-8'>
            <div className={fadeRight ? styles.fadeIn : styles.fadeOut}>
              {hotDeals.slice(activePageRight, activePageRight + 1).map(hotDeal => (
                <div key={hotDeal.id} className={styles.rightCol}>
                  {hotDeal.photo}
                  <div className={styles.slider}>
                    <Swipeable
                      className={styles.swipe}
                      rightAction={rightAction}
                      leftAction={leftAction}
                    />
                    <div className={styles.rightTitle}>
                      <h1>
                        {hotDeal.title} <span>{hotDeal.subtitle}</span>
                      </h1>
                      <p>{hotDeal.description}</p>
                    </div>
                  </div>
                  <Button className={styles.shopNow}>SHOP NOW</Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionBoxes;
