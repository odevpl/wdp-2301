import { connect } from 'react-redux';
import PostBox from './PostBox';
import { getAll } from '../../../redux/postsRedux';

const mapStateToProps = state => ({
  posts: getAll(state),
});

export default connect(mapStateToProps)(PostBox);
