import React from 'react';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/brandsRedux';
import Swipeable from '../../common/Swipeable/Swipeable';
import styles from './BrandBoxes.module.scss';

const BrandBoxes = () => {
  const brands = useSelector(getAll);

  return (
    <div className={styles.root}>
      <div className={`container ${styles.box}`}>
        <Swipeable className={styles.swipeable}>
          <div className='row'>
            {brands.slice(0, 6).map(brand => (
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
