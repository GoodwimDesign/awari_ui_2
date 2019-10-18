import React from 'react';
import { mount } from 'enzyme';
import LeftPane from './leftPane';
import LogoThirtyPercent from '../../images/logos/AwariMainLogoTypeColor_30percent.png';

describe('left pane', () => {
  it('contains an awari logo image', () => {
    const testObject = mount(<LeftPane />);

    expect(testObject.find('img').length).toEqual(1);
    expect(testObject.find('img').props().src).toEqual(LogoThirtyPercent);
    expect(testObject.find('img').props().alt).toEqual('Awari Logo');
  });
});
