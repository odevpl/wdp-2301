import { connect } from 'react-redux';
import ProductBox from './ProductBox.js';
import {
  getAll,
  getCountProductsCompare,
  addProductCompare,
  removeProductCompare,
} from '../../../redux/productsRedux';
import { addProduct } from '../../../redux/cartRedux.js';

const mapStateToProps = state => ({
  products: getAll(state),
  countProductsCompare: () => getCountProductsCompare(state),
});

const mapDispatchToProps = dispatch => ({
  addProductCompare: id => dispatch(addProductCompare(id)),
  removeProductCompare: id => dispatch(removeProductCompare(id)),
  addProduct: id => dispatch(addProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
