import React from 'react';
import PropTypes from 'prop-types';
import styles from './PostBox.module.scss';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';

const PostBox = ({ photo, name, description, comments, date }) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      {photo}
      <div className={`row ${styles.innerPhoto}`}>
        <div className='col'>
          <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
          <span> {date}</span>
        </div>
        <div className='col'>
          <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>
          <span> {comments} Comments</span>
        </div>
      </div>
    </div>
    <div className={styles.content}>
      <h4>{name}</h4>
      <div className={styles.description}>{description}</div>
    </div>
    <div className={styles.action}>
      <Button variant='small' className={styles.btn}>
        Read More
      </Button>
    </div>
  </div>
);

PostBox.propTypes = {
  photo: PropTypes.object,
  name: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  comments: PropTypes.string,
};

export default PostBox;
