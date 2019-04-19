import React from 'react';
import { Platform, AsyncStorage } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
// import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import StudentsScreen from '../screens/StudentsScreen';

const StudentsStack = createStackNavigator({
    students: StudentsScreen,
  });
  
  StudentsStack.navigationOptions = {
    tabBarLabel: 'Students',
    headerColor: 'red',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios'
            ? `ios-people`
            : 'md-people'
        }
      />
    ),
  };
  
  const LinksStack = createStackNavigator({
    Links: LinksScreen,
  });
  
  LinksStack.navigationOptions = {
    tabBarLabel: 'Events',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'}
      />
    ),
  };
  
  const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
  });
  
  SettingsStack.navigationOptions = {
    tabBarLabel: 'User',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
      />
    ),
  };

export default createBottomTabNavigator({
  StudentsStack,
  LinksStack,
  SettingsStack,
});



