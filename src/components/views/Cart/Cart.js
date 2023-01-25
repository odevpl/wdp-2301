import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './Cart.module.scss';
import {
  faHome,
  faMobileAlt,
  faShoppingBasket,
  faTimesCircle,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.templace}>
        <p className={styles.theTemplace}>The templace</p>
        <p></p>
      </div>
      <div className={styles.cartContainer}>
        <p className={styles.cart}>Cart</p>
        <a href='/' className={styles.cartLink + ' row'}>
          <FontAwesomeIcon className={styles.icon} icon={faHome} />
          <p>{'>'} Cart</p>
        </a>
      </div>
      <div className={styles.productsContainer + ' row'}>
        <table className={styles.productTable + ' col-8'}>
          <thead className={styles.productTableHead}>
            <tr className={styles.product}>
              <th scope='col' className={styles.productTh}>
                PRODUCT
              </th>
              <th scope='col'>PRICE</th>
              <th scope='col'>QUANTITY</th>
              <th scope='col'>TOTAL</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            <tr>
              <td className={styles.firstTd}>
                <button className={styles.btnDelete}>
                  <FontAwesomeIcon className={styles.icon} icon={faTimesCircle} />
                </button>
                <img src={`${process.env.PUBLIC_URL}/images/image3.png`} />
                Placeholder Product 7
              </td>
              <td className={styles.priceStyle}>$5.00</td>
              <td className={styles.secondTd}>
                <button>-</button>
                <span className={styles.numberOfProducts}> 1 </span>
                <button>+</button>
              </td>
              <td className={styles.priceStyle}>$5.00</td>
            </tr>
            <tr>
              <td className={styles.firstTd}>
                <button>
                  <FontAwesomeIcon className={styles.icon} icon={faTimesCircle} />
                </button>
                <img src={`${process.env.PUBLIC_URL}/images/image3.png`} />
                Placeholder Product 4
              </td>
              <td className={styles.priceStyle}>$67.00</td>
              <td className={styles.secondTd}>
                <button>-</button>
                <span className={styles.numberOfProducts}> 1 </span>
                <button>+</button>
              </td>
              <td className={styles.priceStyle}>$67.00</td>
            </tr>
            <tr>
              <td className={styles.firstTd}>
                <button>
                  <FontAwesomeIcon className={styles.icon} icon={faTimesCircle} />
                </button>
                <img src={`${process.env.PUBLIC_URL}/images/image3.png`} />
                Placeholder Product 8 - Black, Amber 65
              </td>
              <td className={styles.priceStyle}>$20.00</td>
              <td className={styles.secondTd}>
                <button>-</button>
                <span className={styles.numberOfProducts}> 1 </span>
                <button>+</button>
              </td>
              <td className={styles.priceStyle}>$20.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.couponContainer}>
        <input type='text' placeholder='Coupon code' className={styles.input} />
        <button className={styles.btnApply}> Apply Coupon </button>
        <button className={styles.btnUpdate}> Update Cart </button>
      </div>
      <div className='row justify-content-end'>
        <div className={styles.proceedContainer + ' col-6'}>
          <table className='col-6'>
            <thead>
              <tr>
                <th scope='col'></th>
                <th scope='col' className={styles.cartTotal}>
                  Cart totals
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={'border-right col-5 ' + styles.subtotal}>Subtotal</td>
                <td className={styles.priceStyle}>$92.00</td>
              </tr>
              <tr>
                <td className={'border-right col-5 ' + styles.subtotal}>Total</td>
                <td className={styles.priceStyle}>$92.00</td>
              </tr>
              <tr>
                <td colSpan='2'>
                  <a href='/' className={''}>
                    <button type='button' className={'col-11'}>
                      PROCEED TO CHECKOUT
                    </button>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
