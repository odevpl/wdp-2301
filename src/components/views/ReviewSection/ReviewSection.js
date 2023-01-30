import React from 'react';
import styles from './ReviewSection.module.scss';

import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class ReviewSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'description',
      activeTabId: '',
      comment: '',
      rating: 0,
    };
  }

  handleTabSelect = (eventKey, tabId) => {
    this.setState({ activeTab: eventKey, activeTabId: tabId });
  };

  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.heading}>
            <div className={styles.revSection}>
              <div>
                <ul>
                  <li>
                    <a href='#'>Description</a>
                  </li>
                  <li className={styles.active}>
                    <a href='#'>Reviews (0)</a>
                  </li>
                  <li>
                    <a href='#'>Specification</a>
                  </li>
                  <li>
                    <a href='#'>Custom Tab</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.revContent}>
              <span>There are no reviews for this product</span>
              <Button className={styles.addBtn}>Add a review</Button>
              <div className={styles.rating}>
                <span>Your Rating</span>
                <br />
                <br />
                <span>Bad</span>
                <div className={styles.rattingStar}>
                  {[1, 2, 3, 4, 5].map(i => (
                    <span key={i} href='#'>
                      {i <= 5 ? (
                        <FontAwesomeIcon className={styles.stars} icon={faStar}>
                          {i} stars
                        </FontAwesomeIcon>
                      ) : (
                        <FontAwesomeIcon className={styles.stars} icon={farStar}>
                          {i} stars
                        </FontAwesomeIcon>
                      )}
                    </span>
                  ))}
                </div>
                <span>Good</span>
              </div>
              <form className={styles.form}>
                <span>Your review</span>
                <textarea rows='3' />
                <input type='text' placeholder='Name*' />
                <input type='text' placeholder='Email*' />
                <div className={styles.continueBtn}>
                  <Button>Continue</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewSection;
