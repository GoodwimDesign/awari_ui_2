import React from 'react';
import { mount } from 'enzyme';
import LeftPane from './leftPane';
import LogoThirtyPercent from '../../images/logos/AwariMainLogoTypeColor_30percent.png';

describe('left pane', () => {
  let testObject;
  beforeEach(() => {
    testObject = mount(<LeftPane />);
  });

  it('contains an awari logo image', () => {
    expect(testObject.find('img').length).toEqual(1);
    expect(testObject.find('img').props().src).toEqual(LogoThirtyPercent);
    expect(testObject.find('img').props().alt).toEqual('Awari Logo');
  });

  it('contains links', () => {
    const linksContainer = testObject.find('div.links-container');
    expect(linksContainer.find('span').length).toEqual(5);
    expect(linksContainer.find('span').at(0).text()).toEqual('Dashboard');
    expect(linksContainer.find('span').at(1).text()).toEqual('Messages');
    expect(linksContainer.find('span').at(2).text()).toEqual('Feedback');
    expect(linksContainer.find('span').at(3).text()).toEqual('Goals');
    expect(linksContainer.find('span').at(4).text()).toEqual('Team');
  });
});
