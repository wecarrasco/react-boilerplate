import React from 'react';
import renderer from 'react-test-renderer';

import { LanguageProvider, mapStateToProps } from '../index';

import { messages } from '../../../i18n';

describe('<LanguageProvider />', () => {
  it('should render its children', () => {
    const children = <h1>Test</h1>;
    const renderedComponent = renderer.create(
      <LanguageProvider messages={messages} locale="en">
        {children}
      </LanguageProvider>
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});

describe('<LanguageProvider />', () => {
  it('Map state to props', () => {
    const state = {
      languageProvider: {
        locale: 'es',
        messages: {}
      }
    };
    const props = mapStateToProps(state);
    expect(props).toEqual({ locale: 'es' });
  });
});
