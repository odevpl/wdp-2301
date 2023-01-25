// import PropTypes from 'prop-types';

import {
  faArchive,
  faCalendarAlt,
  faComment,
  faComments,
  faFolder,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './Blog.module.scss';

const Blog = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-9'>
            <h1 className={styles.postTitle}>Witamy na nowej stronie sklepu!</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-9'>
            <img
              className={styles.postImg}
              src='https://images.pexels.com/photos/359989/pexels-photo-359989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='img'
            ></img>
            <p className={styles.postDescr}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non tortor
              non augue hendrerit auctor ac et tortor. Nulla sodales sollicitudin lorem,
              vitae varius purus aliquam in. Maecenas sapien enim, vehicula sit amet
              urna et, sodales tincidunt justo. Nunc varius dapibus nisl sit amet
              rhoncus. Mauris et congue mi. Suspendisse ornare, justo quis laoreet
              tincidunt, lorem libero dictum magna, ac aliquam turpis urna a leo.
              Vestibulum orci quam, condimentum sed sagittis non, maximus sollicitudin
              nisl. Nam vel ante gravida, convallis enim ut, fringilla ligula. Sed
              blandit quam quis semper dictum. Vivamus efficitur dapibus nulla, ut
              viverra augue posuere id. Phasellus sagittis augue vitae lacinia posuere.
              Vivamus eget aliquet arcu.
            </p>
            <small className={styles.postInfo}>
              <div className={styles.postAuthor}>
                <FontAwesomeIcon icon={faUser} /> admin
              </div>
              <div className={styles.postDate}>
                <FontAwesomeIcon icon={faCalendarAlt} /> June 15, 2023
              </div>
              <div className={styles.postCategory}>
                <FontAwesomeIcon icon={faFolder} /> Just Usual
              </div>
              <div className={styles.postMore}>
                <a href='#'>Read More...</a>
              </div>
            </small>
          </div>

          <div className='col-3'>
            <div className={styles.search}>
              <input
                className={styles.searchInput}
                type='text'
                placeholder='Search ...'
              />
            </div>
            <div>
              <div className={styles.postMenu}>
                <h4>
                  <FontAwesomeIcon icon={faComments} /> Recent Posts
                </h4>
                <a href='#' className='list-group-item list-group-item-action'>
                  Witamy na nowej stronie sklepu!
                </a>
                <a href='#' className='list-group-item list-group-item-action'>
                  O nas
                </a>
                <a href='#' className='list-group-item list-group-item-action'>
                  Wysyłka
                </a>
              </div>
              <div className={styles.postMenu}>
                <h4>
                  <FontAwesomeIcon icon={faComment} /> Recent comments
                </h4>
                <a href='#' className='list-group-item list-group-item-action'>
                  oaoaoaoaoa
                </a>
              </div>
              <div className={styles.postMenu}>
                <h4>
                  <FontAwesomeIcon icon={faArchive} /> Archives
                </h4>
                <a href='#' className='list-group-item list-group-item-action'>
                  June 2015
                </a>
              </div>
              <div className={styles.postMenu}>
                <h4>
                  <FontAwesomeIcon icon={faFolder} /> Categories
                </h4>
                <a href='#' className='list-group-item list-group-item-action'>
                  Just Usual
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Blog.propTypes = {};

export default Blog;
