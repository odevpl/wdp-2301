import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './Cart.module.scss';
import { faHome, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct, getAll, clearCart } from '../../../redux/cartRedux';

const Cart = () => {
  const productsInCart = useSelector(getAll);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(removeProduct(id));
  };

  const clearCartPage = () => {
    dispatch(clearCart([]));
  };

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
            {productsInCart.map(product => (
              <tr key={product.id}>
                <th scope='row' className={styles.product}>
                  <button onClick={() => handleDelete(product.id)}>
                    <FontAwesomeIcon className={styles.icon} icon={faTimesCircle} />
                  </button>
                  <div className={styles.photo}>{product.photo}</div>
                  {product.name}
                </th>
                <td className={styles.priceStyle + ' align-middle'}>
                  $ {product.price}
                </td>
                <td className='align-middle'>
                  <div className={styles.quantityContainer}>
                    <button className={styles.quantity}>+</button>
                    <div className={styles.quantityCount}>
                      <span className={styles.numberOfProducts}> 1 </span>
                    </div>
                    <button className={styles.quantity}>-</button>
                  </div>
                </td>
                <td className={styles.priceStyle + ' align-middle'}>
                  $ {product.price}
                </td>
              </tr>
            ))}
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
                    <button type='submit' className={'col-11'} onClick={clearCartPage}>
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
