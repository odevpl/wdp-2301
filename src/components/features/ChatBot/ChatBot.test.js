import React from 'react';
import { shallow } from 'enzyme';
import ChatBot from './ChatBot';

describe('Component ChatBot', () => {
  it('should render without crashing', () => {
    const component = shallow(<ChatBot />);
    expect(component).toBeTruthy();
  });
});
