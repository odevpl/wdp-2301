import { connect } from 'react-redux';
import Cart from './Cart';
import { getAll, removeProduct } from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  cartProducts: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  removeProduct: productId => dispatch(removeProduct(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
