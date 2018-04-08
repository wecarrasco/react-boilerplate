// @flow
const request = require('../utils/request').default;
export default class SampleService {
  getSampleData() {
    return request('https://jsonplaceholder.typicode.com/users');
  }
}
