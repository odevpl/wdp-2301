/* eslint-disable */
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
    countProducts: this.props.countProducts,
    variant: this.props.variant,
    classes: [],
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
        .length / this.state.countProducts;
    return length;
  };

  leftAction = e => {
    if (this.state.activePage > 0) {
      let page = this.state.activePage - 1;
      this.setState({ fade: false });
      setTimeout(() => {
        this.setState({ activePage: page });
        this.setState({ fade: true });
      }, 500);
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
    const { categories, products, viewportWidth } = this.props;
    const {
      activeCategory,
      activePage,
      fade,
      countProducts,
      variant,
      classes,
    } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(
      viewportWidth > 991
        ? categoryProducts.length / countProducts
        : viewportWidth > 767
        ? categoryProducts.length / 2
        : categoryProducts.length / 1
    );

    const desktopElements = categoryProducts.slice(
      activePage * countProducts,
      (activePage + 1) * countProducts
    );
    const tabletElements = categoryProducts.slice(activePage * 2, (activePage + 1) * 2);
    const mobileElements = categoryProducts.slice(activePage * 1, (activePage + 1) * 1);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={dots}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    if (variant) classes.push(styles[variant]);
    else classes.push(styles.main);

    return (
      <Swipeable
        leftAction={this.leftAction.bind(this)}
        rightAction={this.rightAction.bind(this)}
      >
        <div className={classes.join(' ')}>
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
                className={`row + ${styles.productsBox} ${
                  fade ? styles.fadeIn : styles.fadeOut
                }`}
              >
                {(viewportWidth > 991
                  ? desktopElements
                  : viewportWidth > 767
                  ? tabletElements
                  : mobileElements
                ).map(item => (
                  <div key={item.id} className='col-12 col-md-6 col-lg-3'>
                    <ProductBox {...item} />
                  </div>
                ))}
              </div>
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
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  viewportWidth: PropTypes.number,
  countProducts: PropTypes.number,
  activePage: PropTypes.number,
  variant: PropTypes.string,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
