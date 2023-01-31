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
import Button from '../../common/Button/Button';

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
    <div className='container'>
      <div className={styles.root}>
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
        <div className={styles.productsContainer}>
          <table
            className={
              styles.productTable + 'col-xl-6 col-lg-8 col-md-10 col-sm-10 col-xs-3'
            }
          >
            <thead className={styles.productTableHead + 'row'}>
              <tr className={styles.product}>
                <th className={styles.productTh}>PRODUCT</th>
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
        <div className={styles.proceedContainer + ' row'}>
          <table
            className={styles.containerProceed + 'col-xl-10 col-lg-3 col-sm-5 my-3'}
          >
            <thead>
              <tr>
                <th scope='col'></th>
                <th scope='col'>Cart Totals</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={'border-right' + styles.subtotal}>Subtotal</td>
                <td className={styles.priceStyle}>${getSubtotalPrice()}</td>
              </tr>
              <tr>
                <td className={'border-right' + styles.subtotal}>Total</td>
                <td className={styles.priceStyle}>${getTotalPrice()}</td>
              </tr>
            </tbody>
          </table>
          <div className='col-12'>
            <button className={styles.btnCheck} type='submit' onClick={clearCartPage}>
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
