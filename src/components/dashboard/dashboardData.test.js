import React from 'react';
import { mount } from 'enzyme';
import DashboardDataList from './dashboardDataList';
import Clock from '../../images/dashboard/clock.png';

describe('dashboardData', () => {
  let testObject;

  beforeEach(() => {
    testObject = mount(<DashboardDataList />);
  });

  it('contains a clock icon', () => {
    expect(testObject.find('img').length).toEqual(1);
    expect(testObject.find('img').props().src).toEqual(Clock);
    expect(testObject.find('img').props().alt).toEqual('Clock icon');
  });

  it('contains a notice that a sync needs to happen', () => {
    expect(testObject.find('.data').length).toEqual(1);

    expect(testObject.find('.data-details').length).toEqual(1);
    expect(testObject.find('.data-details').text()).toEqual('Please sync HR data');

    expect(testObject.find('.data-title').length).toEqual(1);
    expect(testObject.find('.data-title').text()).toEqual('No HR data found');

    expect(testObject.find('.data-action').length).toEqual(1);
    expect(testObject.find('.data-action').find('button').length).toEqual(1);
    expect(testObject.find('.data-action').find('button').text()).toEqual('Sync Now');
  });
});
