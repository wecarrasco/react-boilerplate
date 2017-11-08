/* eslint-disable */
const fs = require('fs');
// $FlowFixMe
const { sync: globSync } = require('glob');

const i18n = require('../src/i18n');

const messagesFilePattern = './src/locales/messages.json';
const outputLanguageDataDir = './src/locales/';

// Aggregates the default messages that were extracted from the example app's
// React components via the React Intl Babel plugin. An error will be thrown if
// there are messages in different components that use the same `id`. The result
// is a flat collection of `id: message` pairs for the app's default locale.
const defaultMessages = globSync(messagesFilePattern)
  .map(filename => fs.readFileSync(filename, 'utf8'))
  .map(file => JSON.parse(file))
  .reduce((collection, descriptors) => {
    descriptors.forEach(({ id, defaultMessage }) => {
      if (collection.hasOwnProperty(id)) {
        throw new Error(`Duplicate message id: ${id}`);
      }
      collection[id] = defaultMessage;
    });

    return collection;
  }, {});

const newLocales = i18n.appLocales
  .map(language => {
    let parsedMessages = {};
    try {
      parsedMessages[language] = JSON.parse(fs.readFileSync(`${outputLanguageDataDir}${language}.json`, 'utf8'));
    } catch (err) {
      parsedMessages[language] = {};
    }
    return parsedMessages;
  })
  .map(languageMessages => {
    const language = Object.keys(languageMessages)[0];
    let mergedMessages = {};
    mergedMessages[language] = {};
    Object.keys(defaultMessages).forEach(key => {
      mergedMessages[language][key] = languageMessages[language][key] || defaultMessages[key];
    });
    return mergedMessages;
  })
  .map(languageMessages => {
    const language = Object.keys(languageMessages)[0];
    fs.writeFileSync(`${outputLanguageDataDir}${language}.json`, JSON.stringify(languageMessages[language], null, 2));
  });
