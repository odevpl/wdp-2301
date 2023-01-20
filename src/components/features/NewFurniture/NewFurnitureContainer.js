import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { getViewportWidth } from '../../../redux/widthRedux';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  viewportWidth: getViewportWidth(state),
});

export default connect(mapStateToProps)(NewFurniture);
