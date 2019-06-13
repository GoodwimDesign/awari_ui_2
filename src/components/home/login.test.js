import React from 'react';
import { shallow } from 'enzyme';
import Login from './login';
import AwariMainLogo from '../shared/awariMainLogo';

describe('login component', () => {
  it('renders without crashing', () => {
    const testObject = shallow(<Login />);

    expect(testObject.find(AwariMainLogo).props()).toHaveLength(1);
  });
});
