import { connect } from 'react-redux';

import MainLayout from './MainLayout';

import { changeWidth } from '../../../redux/widthRedux';

const mapDispatchToProps = dispatch => ({
  changeWidth: payload => dispatch(changeWidth(payload)),
});

export default connect(null, mapDispatchToProps)(MainLayout);
