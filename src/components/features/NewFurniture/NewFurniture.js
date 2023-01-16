import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import Swipeable from '../../common/Swipeable/Swipeable';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    pageCount: 0,
    fade: true,
  };

  handlePageChange(newPage) {
    this.setState({ fade: false });
    setTimeout(() => {
      this.setState({ activePage: newPage });
      this.setState({ fade: true });
    }, 500);
  }

  handlePageCountChange(newCount) {
    this.setState({ pageCount: newCount });
  }

  getCurrentPageCountLength = () => {
    let length =
      this.props.products.filter(item => item.category === this.state.activeCategory)
        .length / 8;
    return length;
  };

  leftAction = e => {
    if (this.state.activePage > 0) {
      let page = this.state.activePage - 1;
      this.setState({ activePage: page });
    }
    e.preventDefault();
  };

  rightAction = e => {
    let currentPageCount = this.getCurrentPageCountLength();
    let active = this.state.activePage;
    let activeToSet = active + 1;

    this.handlePageCountChange(currentPageCount);
    if (activeToSet < currentPageCount) {
      this.handlePageChange(activeToSet);
    }
    e.preventDefault();
  };

  handleCategoryChange(newCategory) {
    this.setState({ fade: false });
    setTimeout(() => {
      this.setState({ activeCategory: newCategory });
      this.setState({ fade: true });
    }, 750);
  }

  render() {
    const { categories, products } = this.props;
    const { activeCategory, activePage, fade } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <Swipeable
        leftAction={this.leftAction.bind()}
        rightAction={this.rightAction.bind(this)}
      >
        <div className={styles.root}>
          <div className='container'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                <div className={'col-auto ' + styles.heading}>
                  <h3>New furniture</h3>
                </div>
                <div className={'col ' + styles.menu}>
                  <ul>
                    {categories.map(item => (
                      <li key={item.id}>
                        <a
                          className={item.id === activeCategory && styles.active}
                          onClick={() => this.handleCategoryChange(item.id)}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
            <div
              className={`row ${styles.productsBox} ${
                fade ? styles.fadeIn : styles.fadeOut
              }`}
            >
              {categoryProducts
                .slice(activePage * 8, (activePage + 1) * 8)
                .map(item => (
                  <div key={item.id} className='col-12 col-md-6 col-lg-3'>
                    <ProductBox {...item} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Swipeable>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      photo: PropTypes.object,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
