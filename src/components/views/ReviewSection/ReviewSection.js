import React from 'react';
import styles from './ReviewSection.module.scss';

import Button from '../../common/Button/Button';
import Stars from '../../common/Stars/Stars';

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
                    <a href='#'>Reviews</a>
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
                <span>Bad</span>
                <div className={styles.stars}>
                  <Stars />
                </div>
                <span>Good</span>
              </div>
              <form className={styles.form}>
                <textarea rows='3' placeholder='Write your review' />
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
