import { connect } from 'react-redux';
import LatestBlog from './LatestBlog';
import { getAll } from '../../../redux/postsRedux';

const mapStateToProps = state => ({
  posts: getAll(state),
});

export default connect(mapStateToProps)(LatestBlog);
