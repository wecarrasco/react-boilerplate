import type { Action } from '../App/types';

import { CHANGE_LOCALE } from './constants';

export function changeLocale(languageLocale: string): Action<string> {
  return {
    type: CHANGE_LOCALE,
    payload: languageLocale
  };
}
