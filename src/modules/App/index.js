// @flow
import type {AppProps, AppState} from './types';
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import {Logger} from '../../services/logger';
import Home from '../Home';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

export class App extends Component<AppProps, AppState> {
  componentDidMount() {
    const logger = new Logger();
    logger.log('testing', 'Info');
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        <Route exact path="/" component={Home} />
        <AppFooter buildInformation={this.props.buildInformation} />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): AppProps => {
  return {
    buildInformation: state.app.buildInformation,
  };
};

export default connect(mapStateToProps, null)(App);
