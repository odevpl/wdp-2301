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
          <div className='col-xl-9 col-lg-8 col-md-8'>
            <div>
              <h1 className={styles.title}>Witamy na nowej stronie sklepu!</h1>
              <img
                className={styles.img}
                src='https://images.pexels.com/photos/359989/pexels-photo-359989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='img'
              />
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non
                tortor non augue hendrerit auctor ac et tortor. Nulla sodales
                sollicitudin lorem, vitae varius purus aliquam in. Maecenas sapien enim,
                vehicula sit amet urna et, sodales tincidunt justo. Nunc varius dapibus
                nisl sit amet rhoncus.
              </p>
            </div>
            <div className={styles.info}>
              <div className={styles.user}>
                <FontAwesomeIcon icon={faUser} /> admin
              </div>
              <div className={styles.data}>
                <FontAwesomeIcon icon={faCalendarAlt} /> June 15, 2023
              </div>
              <div className={styles.category}>
                <FontAwesomeIcon icon={faFolder} /> Just Usual
              </div>
              <a className={styles.more} href='/'>
                Read more..
              </a>
            </div>
          </div>

          <div className='col-xl-3 col-lg-4 col-md-4'>
            <div>
              <div className={styles.search}>
                <input
                  className={styles.searchInput}
                  type='text'
                  placeholder='Search ...'
                />
              </div>
              <div>
                <div className={styles.option}>
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
                <div className={styles.option}>
                  <h4>
                    <FontAwesomeIcon icon={faComment} /> Recent comments
                  </h4>
                  <a href='#' className='list-group-item list-group-item-action'>
                    oaoaoaoaoa
                  </a>
                </div>
                <div className={styles.option}>
                  <h4>
                    <FontAwesomeIcon icon={faArchive} /> Archives
                  </h4>
                  <a href='#' className='list-group-item list-group-item-action'>
                    June 2015
                  </a>
                </div>
                <div className={styles.option}>
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
    </div>
  );
};

export default Blog;
