import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllFeedback } from '../../../redux/productsRedux';
import styles from './Feedback.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Feedback = () => {

  const feedback = useSelector(getAllFeedback);
  const [activePage,setActivePage] = useState(0);
  const dots = [];

  const getCurrentPageCountLength = () => {
    return feedback.length;
  };

  for (let i = 0; i < 3; i++){
    dots.push(
      <li>
        <a
          className={i === 0 && styles.active}
        >
        </a>
      </li>
    );
  }

  return (
    <div className={styles.root + ' col-12'}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters'>
            <div className={'col-auto ' + styles.heading}>
              <h3>Client Feedback</h3>
            </div>

            <div className={'col-auto ' + styles.dots}>
              <ul>{dots}</ul>
            </div>
          </div>
        </div>

        <div className={styles.icon}>
          <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
        </div>

        <div className={styles.feedbackContent}>
          {feedback[activePage].content}
        </div>

        <div className={styles.profilePicture}>
          {feedback[activePage].profilePicture}
          <div className={styles.author}>
            {feedback[activePage].author}
          </div>
          <div className={styles.clientCompany}>
            {feedback[activePage].clientCompany}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Feedback;
