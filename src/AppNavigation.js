import React from 'react';
import {
  createStackNavigator,
} from 'react-navigation';
import { StatusBar } from 'react-native';
import { Root } from 'native-base';
import MovieListing from './containers/MovieListingContainer/MovieListingContainer';


const App = createStackNavigator(
  {
    MovieListing: { screen: MovieListing },
  },
  {
    initialRouteName: 'MovieListing',
    headerMode: 'none',
  },
);
export default () => (
  <Root>
    <StatusBar
      backgroundColor="black"
      barStyle="light-content"
    />
    <App />
  </Root>
);
