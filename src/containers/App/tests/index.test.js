import React from 'react';
import {App} from '../index';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router';

describe('<App />', () => {
  it('Expect to be render correctly', () => {
    const props = {
      buildInformation: {
        deploymentEnvironment: 'test',
        frontEndBuldNumber: 123,
      },
    };
    const wrapper = renderer.create(
      <MemoryRouter>
        <App {...props} />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
