import React from 'react';
import AppHeader from '../index';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';

describe('<App />', () => {
  it('Expect to be render correctly', () => {
    const wrapper = renderer.create(
      <IntlProvider locale={'en'}>
        <AppHeader />
      </IntlProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
