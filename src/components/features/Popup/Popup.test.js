import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import Popup from './Popup';

describe('Component Popup', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <Popup />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
