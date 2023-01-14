import { connect } from 'react-redux';
import { removeProductCompare, getProductCompare } from '../../../redux/productsRedux';
import ProductsCompare from './ProductsCompare.js';

const mapStateToProps = state => ({
  products: getProductCompare(state),
});

const mapDispatchToProps = dispatch => ({
  removeProductCompare: id => dispatch(removeProductCompare(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsCompare);
