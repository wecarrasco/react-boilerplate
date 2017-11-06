import React from 'react';
import AppHeader from '../index';
import renderer from 'react-test-renderer';

describe('<App />', () => {
  it('Expect to be render correctly', () => {
    const wrapper = renderer.create(<AppHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
