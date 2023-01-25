import React from 'react';
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

const PromotionBoxes = () => {
  const hotDeals = useSelector(getDeals);

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
                  <ul>
                    <li>
                      <a href='/'></a>
                      <a href='/'></a>
                      <a href='/'></a>
                    </li>
                  </ul>
                </div>
                <div className={styles.leftCol}>
                  <img
                    className={styles.leftImg}
                    src={hotDeals[0].photoLeft}
                    alt='photoLeft'
                  />
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
                  <h1 className={styles.name}>{hotDeals[0].name}</h1>
                </div>
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
              <img
                className={styles.rightImg}
                src={hotDeals[1].photoRight}
                alt='photoRight'
              />
              <div className={styles.rightTitle}>
                <h1>
                  INDOOR <span>FURNITURE</span>
                </h1>
                <p>SAVE UP TO 50% OF ALL FURNITURE</p>
              </div>
              <Button className={styles.shopNow}>SHOP NOW</Button>
              <div className={styles.slider}>
                <Button variant='small' className={styles.left}>
                  <FontAwesomeIcon
                    className={styles.left}
                    icon={faCaretLeft}
                  ></FontAwesomeIcon>
                </Button>
                <Button variant='small' className={styles.right}>
                  <FontAwesomeIcon
                    className={styles.right}
                    icon={faCaretRight}
                  ></FontAwesomeIcon>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionBoxes;
