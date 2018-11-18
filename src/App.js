import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { StyleProvider } from 'native-base';
import thunk from 'redux-thunk';
import RootContainer from './RootContainer';
import rootReducer from './reducer/index';
import getTheme from './native-base-theme/components';
import variables from './native-base-theme/variables/platform';

const store = createStore(rootReducer, applyMiddleware(thunk));
export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={store}>
          <RootContainer />
        </Provider>
      </StyleProvider>
    );
  }
}
