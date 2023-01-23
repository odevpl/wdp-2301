import React from 'react';
import PropTypes from 'prop-types';
import styles from './LatestBlog.module.scss';
import PostBox from '../../common/PostBox/PostBoxContainer';

class LatestBlog extends React.Component {
  state = {
    activePage: 0,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  render() {
    const { posts } = this.props;
    const { activePage } = this.state;

    const pagesCount = Math.ceil(posts.length / 3);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Latest blog</h3>
              </div>
              <div className={'col ' + styles.menu}></div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className={'row ' + styles.postBox}>
            {posts.slice(activePage * 3, (activePage + 1) * 3).map(post => (
              <div key={post.id} className='col-4'>
                <PostBox {...post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

LatestBlog.propTypes = {
  children: PropTypes.node,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      photo: PropTypes.object,
      decription: PropTypes.string,
      date: PropTypes.string,
      comments: PropTypes.string,
    })
  ),
};

LatestBlog.defaultProps = {
  posts: [],
};

export default LatestBlog;
