import React from 'react';
import Home from '../index';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';

describe('<Home />', () => {
  it('Expect to be render correctly', () => {
    const wrapper = renderer.create(
      <IntlProvider locale={'en'}>
        <Home />
      </IntlProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
