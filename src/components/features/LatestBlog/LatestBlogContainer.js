import { connect } from 'react-redux';
import LatestBlog from './LatestBlog';
import { getAll } from '../../../redux/postsRedux';
import { getViewportWidth } from '../../../redux/widthRedux';

const mapStateToProps = state => ({
  posts: getAll(state),
  viewportWidth: getViewportWidth(state),
});

export default connect(mapStateToProps)(LatestBlog);
