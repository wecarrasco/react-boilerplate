export type BuildInformation = {
  frontEndBuildNumber: number,
  deploymentEnvironment: string,
};

export type AppState = {
  buildInformation: BuildInformation,
};
