import React from 'react';
import { Platform, AsyncStorage } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
// import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ClassScreen from '../screens/ClassScreen';
import StudentsScreen from '../screens/StudentsScreen';


const ClassStack = createStackNavigator({
  class: ClassScreen
})


ClassStack.navigationOptions = {
  tabBarLabel: 'Class',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-desktop' : 'md-desktop'}
    />
  ),
};


const StudentsStack = createStackNavigator({
  students: StudentsScreen,
});



StudentsStack.navigationOptions = {
  tabBarLabel: 'Students',
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
  ClassStack,
  StudentsStack,
  LinksStack,
  SettingsStack,
});

// export default AsyncStorage.getItem('@IsTeacher').then((value) => {
//   if(value) {
//     return createBottomTabNavigator({
//       ClassStack,
//       HomeStack,
//       LinksStack,
//       SettingsStack,
//     });
//   } else {
//     return createBottomTabNavigator({
//       HomeStack,
//       LinksStack,
//       SettingsStack,
//     });
//   }
// }
// );

// AsyncStorage.clear();


