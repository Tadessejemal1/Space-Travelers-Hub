import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import Profile from '../../components/Profile/profile';

afterEach(() => cleanup());

it('Profile Renders Correctly', () => {
  const tree = renderer.create(<Profile />).toJSON();
  expect(tree).toMatchSnapshot();
});
