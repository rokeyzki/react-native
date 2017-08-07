import React from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './home-screen';
import OtherScreen from './other-screen';

const AppRoot = StackNavigator({
  Home: { screen: HomeScreen },
  Other: { screen: OtherScreen },
});

export default AppRoot;
