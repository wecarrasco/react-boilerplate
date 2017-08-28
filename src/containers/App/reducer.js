import type {AppState} from './types';

const initialState: AppState = {
  buildInformation: {
    frontEndBuildNumber: process.env.REACT_APP_BUILD_NUMBER,
    deploymentEnvironment: process.env.REACT_APP_DEPLOYMENT_ENV,
  },
};

const app = (state: AppState = initialState, action): AppState => {
  const {type} = action;
  switch (type) {
    default:
      return state;
  }
};

export default app;
