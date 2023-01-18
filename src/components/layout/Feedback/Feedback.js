import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllFeedback } from '../../../redux/productsRedux';
import styles from './Feedback.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Swipeable from '../../common/Swipeable/Swipeable';

const Feedback = () => {
  const feedback = useSelector(getAllFeedback);
  const [activePage, setActivePage] = useState(0);
  const [fade, setFade] = useState(true);
  const pagesCount = feedback.length;
  const dots = [];

  const leftAction = e => {
    if (activePage > 0) {
      setFade(false);
      let page = activePage - 1;
      setTimeout(() => {
        setFade(true);
        setActivePage(page);
      }, 500);
    }
    e.preventDefault();
  };

  const rightAction = e => {
    let page = activePage + 1;
    if (page < pagesCount) {
      setFade(false);
      setTimeout(() => {
        setFade(true);
        handlePageChange(page);
      });
    }
    e.preventDefault();
  };

  const handlePageChange = newPage => {
    setFade(false);
    setTimeout(() => {
      setActivePage(newPage);
      setFade(true);
    }, 500);
  };

  for (let i = 0; i < pagesCount; i++) {
    dots.push(
      <li key={dots}>
        <a
          onClick={() => handlePageChange(i)}
          className={i === activePage && styles.active}
        ></a>
      </li>
    );
  }

  return (
    <Swipeable leftAction={leftAction} rightAction={rightAction}>
      <div className={styles.root + ' col-12'}>
        <div className='row no-gutters'>
          <div className={'col-auto ' + styles.heading}>
            <h3>Client Feedback</h3>
          </div>
          <div className={'col-auto ' + styles.dots}>
            <ul>{dots}</ul>
          </div>
        </div>

        <div className={fade ? styles.fadeIn : styles.fadeOut}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
          </div>
          <div className={styles.feedbackContent}>{feedback[activePage].content}</div>

          <div className={styles.profilePicture}>
            {feedback[activePage].profilePicture}
            <div className={styles.author}>{feedback[activePage].author}</div>
            <div className={styles.clientCompany}>
              {feedback[activePage].clientCompany}
            </div>
          </div>
        </div>
      </div>
    </Swipeable>
  );
};

export default Feedback;
