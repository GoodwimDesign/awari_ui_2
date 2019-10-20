import React from 'react';
import { mount } from 'enzyme';
import MiddlePane from './middlePane';
import DashboardDataList from './dashboardDataList';

describe('middlePane', () => {
  let testObject;

  beforeEach(() => {
    testObject = mount(<MiddlePane />);
  });

  it('contains a dashboard header', () => {
    expect(testObject.find('h1').length).toEqual(1);
    expect(testObject.find('h1').text()).toEqual('Dashboard');
  });

  it('contains a dashboard data component', () => {
    expect(testObject.find(DashboardDataList).length).toEqual(1);
  });
});
