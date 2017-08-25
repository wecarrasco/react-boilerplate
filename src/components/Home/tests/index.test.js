import React from 'react';
import Home from '../index';
import renderer from 'react-test-renderer';

describe('<Home />', () => {
  it('Expect to be render correctly', () => {
    const wrapper = renderer.create(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
