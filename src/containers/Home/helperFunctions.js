// $FlowFixMe
import { equals } from 'ramda';

// $FlowFixMe
const isCheckbox = id => {
  return equals(id, 'MessagePrivacy');
};

// $FlowFixMe
const isTitle = id => {
  return equals(id, 'MessageTitle');
};

// $FlowFixMe
const isContent = id => {
  return equals(id, 'MessageContent');
};

export { isCheckbox, isTitle, isContent };
