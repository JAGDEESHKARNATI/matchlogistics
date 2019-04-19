import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import MainTabNavigator from './MainTabNavigator';
import MainTabNavigatorForGaurdian from './MainTabNavigatorForGaurdian';

const Login = createStackNavigator({
  Login: {
    screen: LoginScreen,
    headerMode: 'none',
    navigationOptions: {
      header: null,
    }
  }
});



export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Auth: Login,
  Main: MainTabNavigator,
  MainG: MainTabNavigatorForGaurdian
}, {
  initialRouteName: 'Auth'
}));