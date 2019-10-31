import React from 'react';
import { mount } from 'enzyme';
import Dashboard from './dashboard';
import LeftPane from './leftPane';
import MiddlePane from './middlePane';

describe('dashboard', () => {
  const testObject = mount(<Dashboard />);

  it('renders a left pane', () => {
    expect(testObject.find(LeftPane).exists()).toEqual(true);
  });

  it('renders a middle pane', () => {
    expect(testObject.find(MiddlePane).exists()).toEqual(true);
  });
});
