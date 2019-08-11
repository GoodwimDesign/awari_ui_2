import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import Login from './components/home/login';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it.skip('renders a Login component', () => {
  const testObject = shallow(<App />);
  expect(testObject.find(Login)).toHaveLength(1);
});
