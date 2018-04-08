// @flow
export type BuildInformation = {
  frontEndBuildNumber: any,
  deploymentEnvironment: any
};

export type SampleData = Array<any>;

export type Actions = any;

export type AppState = {
  buildInformation: BuildInformation,
  sampleData: SampleData,
  actions?: Actions
};

export type Action<TPayload> = {
  type: string,
  payload?: TPayload
};
