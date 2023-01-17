/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getAllFeedback = ({ feedback }) => feedback;

/* actions */
const createActionName = actionName => `app/products/${actionName}`;
const TOGGLE_FAVOURITE = createActionName('TOGGLE_FAVOURITE');
const ADD_PRODUCT_COMPARE = createActionName('ADD_PRODUCT_COMPARE');
const REMOVE_PRODUCT_COMPARE = createActionName('REMOVE_PRODUCT_COMPARE');

/* action creators */
export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);
export const toggleFavourite = payload => ({
  type: TOGGLE_FAVOURITE,
  payload,
});

export const getProductCompare = ({ products }) =>
  products.filter(product => product.isComparable === true);

export const getCountProductsCompare = ({ products }) =>
  products.filter(product => product.isComparable === true).length;

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
    case TOGGLE_FAVOURITE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, isFavourite: !product.isFavourite }
          : product
      );
    default:
      return statePart;
  }
}
