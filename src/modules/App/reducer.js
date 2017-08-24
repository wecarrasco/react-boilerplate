const initialState = {
  buildInformation: {
    frontEndBuldNumber: process.env.REACT_APP_BUILD_NUMBER,
    deploymentEnvironment: process.env.REACT_APP_DEPLOYMENT_ENV,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
