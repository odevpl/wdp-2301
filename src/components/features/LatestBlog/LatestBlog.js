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
    const { posts, viewportWidth } = this.props;
    const { activePage } = this.state;

    const pagesCount = Math.ceil(
      viewportWidth > 991
        ? posts.length / 3
        : viewportWidth > 767
        ? posts.length / 2 // eslint-disable-line
        : posts.length / 1 // eslint-disable-line
    );

    const desktopElements = posts.slice(activePage * 3, (activePage + 1) * 3);

    const tabletElements = posts.slice(activePage * 2, (activePage + 1) * 2);
    const mobileElements = posts.slice(activePage * 1, (activePage + 1) * 1);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={dots}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage ? styles.active : ''}
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
            {(viewportWidth > 991
              ? desktopElements
              : viewportWidth > 767 // eslint-disable-next-line
              ? tabletElements // eslint-disable-next-line
              : mobileElements
            ).map(post => (
              <div key={post.id} className='col col-sm-12 col-md-6 col-lg-4'>
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
  viewportWidth: PropTypes.number,
};

LatestBlog.defaultProps = {
  posts: [],
};

export default LatestBlog;
