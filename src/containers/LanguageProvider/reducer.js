import type { Action } from '../App/types';
import type { LanguageProviderState } from './types';
import { CHANGE_LOCALE } from './constants';
import { defaultLocale } from '../../i18n';

const initialState = {
  locale: defaultLocale
};

function languageProviderReducer(state: LanguageProviderState = initialState, action: Action<*>) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_LOCALE:
      return { ...state, locale: payload };
    default:
      return state;
  }
}

export default languageProviderReducer;
