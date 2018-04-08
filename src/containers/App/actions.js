// @flow
import type { Action, SampleData } from './types';
import * as ActionTypes from './constants';

export function getSampleData(): Action<any> {
  return {
    type: ActionTypes.GET_SAMPLE_DATA
  };
}

export function getSampleDataSuccess(data: SampleData): Action<SampleData> {
  return {
    type: ActionTypes.GET_SAMPLE_DATA_SUCCESS,
    payload: data
  };
}

export function getSampleDataError(errorMessage: string): Action<string> {
  return {
    type: ActionTypes.GET_SAMPLE_DATA_ERROR_MESSAGE,
    payload: errorMessage
  };
}
