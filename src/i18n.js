const appLocales = ['en', 'es'];
const defaultLocale = 'es';

const messages = appLocales.reduce((languageMessages, language) => {
  // $FlowFixMe
  languageMessages[`${language}`] = require(`./locales/${language}`);
  return languageMessages;
}, {});

module.exports = {
  appLocales,
  defaultLocale,
  messages
};
