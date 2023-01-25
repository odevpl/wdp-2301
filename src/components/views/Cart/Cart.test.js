import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import Cart from './Cart';

describe('Component Cart', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
