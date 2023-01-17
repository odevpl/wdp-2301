import React from 'react';
import { shallow } from 'enzyme';
import Promotions from './Promotions';
import store from '../../../redux/store';
import { Provider } from 'react-redux';

describe('Component Promotions', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <Promotions />;
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
