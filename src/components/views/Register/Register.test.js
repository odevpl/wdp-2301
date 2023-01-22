import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import Register from './Register';

describe('Component Register', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <Register />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
