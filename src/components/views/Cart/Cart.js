import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './Cart.module.scss';
import { faHome, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeProduct,
  getAll,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
  updateTotalPrice,
} from '../../../redux/cartRedux';

const Cart = () => {
  const productsInCart = useSelector(getAll);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(removeProduct(id));
  };

  const clearCartPage = () => {
    dispatch(clearCart([]));
  };

  const increaseProductQuantity = cart_id => {
    dispatch(increaseQuantity(cart_id));
    dispatch(updateTotalPrice(cart_id));
  };

  const decreaseProductQuantity = cart_id => {
    dispatch(decreaseQuantity(cart_id));
    dispatch(updateTotalPrice(cart_id));
  };

  const getSubtotalPrice = () => {
    let subtotalPrice = 0;
    productsInCart.map(
      product => (subtotalPrice = subtotalPrice + product.price * product.quantity)
    );

    return subtotalPrice;
  };

  const getTotalPrice = () => {
    let total = getSubtotalPrice();

    if (total === 0) return 0;

    return total + 20;
  };

  const getTotalPriceForProduct = product => {
    return product.quantity * product.price;
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
                    <button
                      className={styles.quantity}
                      onClick={() => increaseProductQuantity(product.id)}
                    >
                      +
                    </button>
                    <div className={styles.quantityCount}>
                      <span className={styles.numberOfProducts}>
                        {' '}
                        {product.quantity}{' '}
                      </span>
                    </div>
                    <button
                      className={styles.quantity}
                      onClick={() => decreaseProductQuantity(product.id)}
                    >
                      -
                    </button>
                  </div>
                </td>
                <td className={styles.priceStyle + ' align-middle'}>
                  $ {getTotalPriceForProduct(product)}
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
                <td className={styles.priceStyle}>${getSubtotalPrice()}</td>
              </tr>
              <tr>
                <td className={'border-right col-5 ' + styles.subtotal}>Total</td>
                <td className={styles.priceStyle}>${getTotalPrice()}</td>
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
