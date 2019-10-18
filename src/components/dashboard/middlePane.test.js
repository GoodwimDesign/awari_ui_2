import React from 'react';
import { mount } from 'enzyme';
import MiddlePane from './middlePane';

describe('middlePane', () => {
  it('contains a dashboard header', () => {
    const testObject = mount(<MiddlePane />);

    expect(testObject.find('h1').length).toEqual(1);
    expect(testObject.find('h1').text()).toEqual('Dashboard');
  });
});
