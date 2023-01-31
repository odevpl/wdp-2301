/* selectors */
export const getAll = ({ cart }) => cart.products;
export const getCount = ({ cart }) => cart.products.length;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const INCREASE_QUANTITY = createActionName('UPDATE_QUANTITY');
const DECREASE_QUANTITY = createActionName('DECREASE_QUANTITY');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const CLEAR_CART = createActionName('CLEAR_CART');
const UPDATE_TOTAL_PRICE = createActionName('UPDATE_TOTAL_PRICE');

/* action creators */
export const addProduct = payload => ({ payload, type: ADD_PRODUCT });
export const increaseQuantity = payload => ({ payload, type: INCREASE_QUANTITY });
export const decreaseQuantity = payload => ({ payload, type: DECREASE_QUANTITY });
export const updateTotalPrice = payload => ({ payload, type: UPDATE_TOTAL_PRICE });
export const removeProduct = payload => ({ payload, type: REMOVE_PRODUCT });
export const clearCart = payload => ({ payload, type: CLEAR_CART });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT: {
      if (
        !(
          statePart.products.filter(product => product.id === action.payload.id)
            .length > 0
        )
      ) {
        return { ...statePart, products: [...statePart.products, action.payload] };
      }
    }
    case REMOVE_PRODUCT: {
      return {
        ...statePart,
        products: [
          ...statePart.products.filter(product => product.id !== action.payload),
        ],
      };
    }
    case CLEAR_CART: {
      return {
        products: [],
      };
    }
    case INCREASE_QUANTITY:
      return {
        ...statePart,
        products: [
          ...statePart.products.map(item =>
            action.payload === item.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        ],
      };
    case DECREASE_QUANTITY:
      return {
        ...statePart,
        products: [
          ...statePart.products.map(item =>
            action.payload === item.id
              ? { ...item, quantity: item.quantity - (item.quantity > 1 ? 1 : 0) }
              : item
          ),
        ],
      };
    case UPDATE_TOTAL_PRICE:
      return {
        ...statePart,
        products: [
          ...statePart.products.map(item =>
            action.payload === item.id
              ? { ...item, totalPrice: item.price * item.quantity }
              : item
          ),
        ],
      };
    default:
      return statePart;
  }
}
