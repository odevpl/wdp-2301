import { connect } from 'react-redux';
import ProductBox from './ProductBox.js';
import {
  getAll,
  getCountProductsCompare,
  addProductCompare,
  removeProductCompare,
} from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
  countProductsCompare: () => getCountProductsCompare(state),
});

const mapDispatchToProps = dispatch => ({
  addProductCompare: id => dispatch(addProductCompare(id)),
  removeProductCompare: id => dispatch(removeProductCompare(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
