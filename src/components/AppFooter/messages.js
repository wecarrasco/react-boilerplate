import { defineMessages } from 'react-intl';

const messages = defineMessages({
  BackendVersion: {
    id: 'App.Footer.BackendVersion',
    defaultMessage: 'Back-End Version (get from the api)'
  },
  FrontEndInformation: {
    id: 'App.Footer.FrontEndInformation',
    defaultMessage: 'Front-End Version {deploymentEnvironment} {frontEndBuildNumber}'
  }
});

export default messages;
