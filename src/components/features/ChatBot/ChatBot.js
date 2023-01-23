import React from 'react';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ChatBot.module.scss';
import { faPaperPlane, faHeadset, faComments } from '@fortawesome/free-solid-svg-icons';

class ChatBot extends React.Component {
  state = {
    visible: false,
  };

  handleClick = event => {
    event.preventDefault();
    if (this.state.visible === false) {
      this.setState({
        visible: true,
      });
    } else {
      this.setState({
        visible: false,
      });
    }
  };

  render() {
    return (
      <div className={styles.root}>
        <div
          className={
            this.state.visible === true ? styles.chatActive : styles.chatInactive
          }
        >
          <div className={styles.box}>
            <div className={styles.background}>
              <FontAwesomeIcon icon={faHeadset} className={styles.icon} />
              <div className={styles.response}>
                <p>W czym mogę pomóc?</p>
              </div>
            </div>
          </div>
          <div className={styles.chat}>
            <form>
              <textarea></textarea>
              <div className={styles.iconCont}>
                <FontAwesomeIcon icon={faPaperPlane} />
              </div>
            </form>
          </div>
        </div>
        <Button variant='outline' className={styles.button} onClick={this.handleClick}>
          <FontAwesomeIcon icon={faComments} /> Potrzebujesz pomocy, napisz!
        </Button>
      </div>
    );
  }
}

export default ChatBot;
