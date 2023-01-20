import React from 'react';
import styles from './Popup.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

const Popup = ({ open, onClose, productBox }) => {
  if (!open) return null;

  return (
    <div className={styles.popup}>
      <div onClick={onClose} className={styles.overlay}>
        kupa
        <div
          onClick={e => {
            e.stopPropagation();
          }}
          className={styles.modalContainer}
        >
          {productBox.photo}
          <div className={styles.modalRight}>
            <p className={styles.closeBtn} onClick={onClose}>
              <FontAwesomeIcon icon={faWindowClose}></FontAwesomeIcon>
            </p>
            <div className={styles.content}>
              <p>
                <b>id: </b>
                {productBox.id}
              </p>
              <p>
                <b>name: </b>
                {productBox.name}
              </p>
              <p>
                <b>category: </b>
                {productBox.category}
              </p>
              <p>
                <b>oldPrice: </b>
                {productBox.oldPrice}
              </p>
              <p>
                <b>price: </b>
                {productBox.price}
              </p>
              <p>
                <b>stars: </b>
                {productBox.stars}
              </p>
              <p>
                <b>userStars: </b>
                {productBox.userStars}
              </p>
              <p>
                <b>promo: </b>
                {productBox.promo}
              </p>
              <p>
                <b>promotion: </b>
                {productBox.promotion}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  open: PropTypes.func,
  onClose: PropTypes.func,
  productBox: PropTypes.object,
};

export default Popup;
