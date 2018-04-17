// $FlowFixMe
const newTitle = (state, newTitles) => {
  return { ...state, title: newTitles };
};

// $FlowFixMe
const newContent = (state, newContents) => {
  return { ...state, mensaje: newContents };
};

// $FlowFixMe
const newPrivacy = (state, newPrivacy) => {
  return { ...state, public: newPrivacy };
};
export { newTitle, newContent, newPrivacy };
