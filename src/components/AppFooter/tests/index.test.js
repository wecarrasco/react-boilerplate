import React from 'react';
import AppFooter from '../index';
import renderer from 'react-test-renderer';

describe('<App />', () => {
  it('Expect to be render correctly', () => {
    const props = {
      deploymentEnvironment: 'test',
      frontEndBuildNumber: 123
    };
    const wrapper = renderer.create(<AppFooter {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
