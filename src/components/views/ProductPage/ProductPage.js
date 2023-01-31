import React from 'react';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import ReviewSection from '../ReviewSection/ReviewSection';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faPlus,
  faMinus,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import {
  faStar as faStarr,
  faHeart,
  faEnvelope,
} from '@fortawesome/free-regular-svg-icons';
import {
  faTwitter,
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';
import Button from '../../common/Button/Button';

const ProductPage = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-5'>
          <div className={styles.bigImage} />
          <div className={styles.gallery}>
            <Button variant='outline' className={styles.arrow}>
              <FontAwesomeIcon icon={faAngleLeft}>Left</FontAwesomeIcon>
            </Button>
            <div className={styles.smallImage} />
            <div className={styles.smallImage} />
            <div className={styles.smallImage} />
            <div className={styles.smallImage} />
            <Button variant='outline' className={styles.arrow}>
              <FontAwesomeIcon icon={faAngleRight}>Right</FontAwesomeIcon>
            </Button>
          </div>
        </div>
        <div className='col-lg-7'>
          <div className={styles.title}>
            <h3>Sunbaby Magic Bear Chair</h3>
            <Button variant='outline' className={styles.arrow}>
              <FontAwesomeIcon icon={faAngleLeft}>Left</FontAwesomeIcon>
            </Button>
            <Button variant='outline' className={styles.arrow}>
              <FontAwesomeIcon icon={faAngleRight}>Right</FontAwesomeIcon>
            </Button>
          </div>
          <div className={styles.star}>
            <FontAwesomeIcon className={styles.checked} icon={faStar} />
            <FontAwesomeIcon className={styles.checked} icon={faStar} />
            <FontAwesomeIcon icon={faStarr} />
            <FontAwesomeIcon icon={faStarr} />
            <FontAwesomeIcon icon={faStarr} />
            <p>(0 reviews)</p>
            <p className={styles.review}>Add your review</p>
          </div>
          <div className={styles.price}>
            <p className={styles.oldPrice}>$350.00</p>
            <p className={styles.promoPrice}>$250.00</p>
          </div>
          <div className={styles.buttons}>
            <div>
              <Button variant='contained' className={styles.addToCart}>
                <FontAwesomeIcon icon={faShoppingBasket} />
                ADD TO CART
              </Button>
              <Button variant='outline' className={styles.actionButton}>
                <FontAwesomeIcon icon={faHeart} />
              </Button>
              <Button variant='outline' className={styles.actionButton}>
                <FontAwesomeIcon icon={faExchangeAlt} />
              </Button>
              <Button variant='outline' className={styles.actionButton}>
                <FontAwesomeIcon icon={faEnvelope} />
              </Button>
            </div>
            <div className={styles.quantity}>
              <p>Quantity:</p>
              <input type='number' />
              <Button variant='outline' className={styles.actionButton}>
                <FontAwesomeIcon icon={faMinus} />
              </Button>
              <Button variant='outline' className={styles.actionButton}>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </div>
          </div>
          <div className={styles.overview}>
            <h4>Quick Overview</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod, ipsum
              vitae vestibulum scelerisque, risus ipsum condimentum ipsum, ut malesuada
              massa arcu in massa. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Suspendisse nec velit sit amet augue euismod semper.
            </p>
          </div>
          <div className={styles.data}>
            <div className='row'>
              <div className='col-lg-2'>
                <p>Availability: </p>
                <p>Category: </p>
              </div>
              <div className='col-lg-2'>
                <p className={styles.info}>In Stock</p>
                <p className={styles.info}>Furniture</p>
              </div>
            </div>
          </div>
          <div className={styles.social}>
            <a className={styles.fb} href='/#'>
              <FontAwesomeIcon className={styles.iconF} icon={faFacebookF} />
              Share
            </a>
            <a className={styles.link} href='/#'>
              <FontAwesomeIcon className={styles.iconG} icon={faGooglePlusG} />
              Google+
            </a>
            <a className={styles.link} href='/#'>
              <FontAwesomeIcon className={styles.iconT} icon={faTwitter} />
              Tweet
            </a>
            <a className={styles.link} href='/#'>
              <FontAwesomeIcon className={styles.iconP} icon={faPinterestP} />
              Pinterest
            </a>
            <a className={styles.link} href='/#'>
              <FontAwesomeIcon className={styles.iconL} icon={faLinkedinIn} />
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
    <NewFurniture countProducts={4} variant='productPage' />
    <ReviewSection />
  </div>
);

// ProductPage.propTypes = {};

export default ProductPage;
