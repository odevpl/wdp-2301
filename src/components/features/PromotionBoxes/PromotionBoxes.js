import React, { useEffect, useState } from 'react';
import styles from '../PromotionBoxes/PromotionBoxes.module.scss';
import { useSelector } from 'react-redux';
import { getDeals } from '../../../redux/hotDealsRedux';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretLeft,
  faCaretRight,
  faExchangeAlt,
  faEye,
  faHeart,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import Stars from '../../common/Stars/Stars';
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
          className={i === activePageLeft && styles.active}
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
          <div className='col-4'>
            <div className={styles.header}>
              <div className={styles.leftPhoto}>
                <div className={styles.leftTitle}>
                  <h1>HOT DEALS</h1>
                </div>
                <div className={styles.dots}>
                  <ul>{dots}</ul>
                </div>

                <div className={fadeLeft ? styles.fadeIn : styles.fadeOut}>
                  {products.slice(activePageLeft, activePageLeft + 1).map(product => (
                    <div key={product.id}>
                      <div className={styles.leftCol}>
                        {product.photo}
                        <div className={styles.addCart}>
                          <Button variant='small' className={styles.addToCart}>
                            <FontAwesomeIcon
                              className={styles.fontShop}
                              icon={faShoppingBasket}
                            ></FontAwesomeIcon>
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
                        <h1 className={styles.name}>{product.name}</h1>
                      </div>
                      <div className={styles.stars}>
                        <Stars></Stars>
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
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={fadeRight ? styles.fadeIn : styles.fadeOut}>
            {hotDeals.slice(activePageRight, activePageRight + 1).map(hotDeal => (
              <div key={hotDeal.id} className='col'>
                <div className={styles.rightCol}>
                  {hotDeal.photo}
                  <div className={styles.rightTitle}>
                    <h1>
                      {hotDeal.title} <span>{hotDeal.subtitle}</span>
                    </h1>
                    <p>{hotDeal.description}</p>
                  </div>
                  <Button className={styles.shopNow}>SHOP NOW</Button>
                  <div className={styles.slider}>
                    <Button
                      variant='small'
                      className={styles.left}
                      onClick={leftAction}
                    >
                      <FontAwesomeIcon
                        className={styles.left}
                        icon={faCaretLeft}
                      ></FontAwesomeIcon>
                    </Button>
                    <Button
                      variant='small'
                      className={styles.right}
                      onClick={rightAction}
                    >
                      <FontAwesomeIcon
                        className={styles.right}
                        icon={faCaretRight}
                      ></FontAwesomeIcon>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionBoxes;
