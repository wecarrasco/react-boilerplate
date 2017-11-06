import 'whatwg-fetch';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  // $FlowFixMe
  error.response = response;
  throw error;
}

export default function request(url: string, options?: Object) {
  // $FlowFixMe
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}
