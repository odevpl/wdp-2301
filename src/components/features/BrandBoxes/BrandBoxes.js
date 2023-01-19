import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/brandsRedux';
import Swipeable from '../../common/Swipeable/Swipeable';
import styles from './BrandBoxes.module.scss';

const BrandBoxes = () => {
  const brands = useSelector(getAll);
  const [activePage, setActivePage] = useState(0);

  let countPhotos = 0;
  const rwd = window.innerWidth;
  if (rwd >= 0 && rwd < 768) {
    countPhotos = 2;
  } else if (rwd >= 768 && rwd < 991) {
    countPhotos = 4;
  } else {
    countPhotos = 6;
  }

  const countPages = Math.ceil(brands.length / countPhotos - 1);

  const leftAction = e => {
    e.preventDefault();
    if (activePage !== 0) {
      setActivePage(activePage - 1);
    } else if (activePage === 0) {
      setActivePage(countPages);
    }
  };

  const rightAction = e => {
    e.preventDefault();
    if (activePage !== countPages) {
      setActivePage(activePage + 1);
    } else if (activePage === countPages) {
      setActivePage(0);
    }
  };

  return (
    <div className={styles.root}>
      <div className={`container ${styles.box}`}>
        <Swipeable leftAction={leftAction} rightAction={rightAction}>
          <div className='row'>
            {brands
              .slice(activePage * countPhotos, (activePage + 1) * countPhotos)
              .map(brand => (
                <div key={brand.id} className={`col ${styles.image}`}>
                  {brand.photo}
                </div>
              ))}
          </div>
        </Swipeable>
      </div>
    </div>
  );
};

export default BrandBoxes;
