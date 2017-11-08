export class Logger {
  LTracker: Array<Object>;
  constructor() {
    this.LTracker = global._LTracker = global._LTracker || []; // eslint-disable-line
    this.LTracker.push({
      // eslint-disable-line
      logglyKey: '5c94de57-80be-446d-9e84-798ed0d99f34',
      sendConsoleErrors: true,
      tag: 'react_boilerplateTag'
    });
  }
  log(message: string, severity: string) {
    this.LTracker.push({
      text: message,
      severity
    });
  }
}
