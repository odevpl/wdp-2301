import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import Feedback from './Feedback';

describe('Componen Feedback', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <Feedback />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
