import React from 'react';
import {
  createStackNavigator,
} from 'react-navigation';
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
    <App />
  </Root>
);
