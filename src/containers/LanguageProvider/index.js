/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

type ComponentProps = {
  messages: Object,
  children: Object
};

type StateProps = {
  locale: string
};

export class LanguageProvider extends React.PureComponent<ComponentProps & StateProps> {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <IntlProvider
        locale={this.props.locale}
        key={this.props.locale}
        messages={this.props.messages[this.props.locale]}
      >
        {React.Children.only(this.props.children)}
      </IntlProvider>
    );
  }
}

export const mapStateToProps = ({ languageProvider }: Object): StateProps => ({
  locale: languageProvider.locale
});

export default connect(mapStateToProps)(LanguageProvider);
