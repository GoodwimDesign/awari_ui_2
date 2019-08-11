import React from 'react';
import { shallow } from 'enzyme';
import Login from './login';
import AwariMainLogo from '../shared/awariMainLogo';
import AppConfig from '../../appConfig';

describe('login component', () => {
  it('renders the correct things', () => {
    const testObject = shallow(<Login />);

    expect(testObject.find(AwariMainLogo)).toHaveLength(1);
    expect(testObject.find('div.login-tagline').text()).toEqual(AppConfig.labels.login.tagline);
  });
});
