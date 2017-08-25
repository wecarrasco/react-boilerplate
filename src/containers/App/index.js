// @flow
import type {AppProps, AppState} from './types';
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import {Logger} from '../../services/logger';
import Home from '../../components/Home';
import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';

export class App extends Component<AppProps> {
  componentDidMount() {
    const logger = new Logger();
    logger.log('testing', 'Info');
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        <Route exact path="/" component={Home} />
        <AppFooter
          deploymentEnvironment={
            this.props.buildInformation.deploymentEnvironment
          }
          frontEndBuldNumber={this.props.buildInformation.frontEndBuldNumber}
        />
      </div>
    );
  }
}

export const mapStateToProps = ({app}: AppState): AppProps => ({
  buildInformation: app.buildInformation,
});

export default connect(mapStateToProps, null)(App);
