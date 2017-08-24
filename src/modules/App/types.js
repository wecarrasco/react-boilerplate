export type BuildInformation = {
  frontEndBuldNumber: number,
  deploymentEnvironment: string,
};

export type AppProps = {
  buildInformation: BuildInformation,
};

export type AppState = {
  buildInformation: BuildInformation,
};
