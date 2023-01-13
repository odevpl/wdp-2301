/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getProductCompare = ({ products }) =>
  products.filter(product => product.isComparable === true);

/* actions */
const createActionName = actionName => `app/products/${actionName}`;
const ADD_PRODUCT_COMPARE = createActionName('ADD_PRODUCT_COMPARE');
const REMOVE_PRODUCT_COMPARE = createActionName('REMOVE_PRODUCT_COMPARE');

/* action crators */
export const addProductCompare = payload => ({ type: ADD_PRODUCT_COMPARE, payload });
export const removeProductCompare = payload => ({
  type: REMOVE_PRODUCT_COMPARE,
  payload,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT_COMPARE:
      return statePart.map(product =>
        product.id === action.payload ? { ...product, isComparable: true } : product
      );
    case REMOVE_PRODUCT_COMPARE:
      return statePart.map(product =>
        product.id === action.payload ? { ...product, isComparable: false } : product
      );
    default:
      return statePart;
  }
}
