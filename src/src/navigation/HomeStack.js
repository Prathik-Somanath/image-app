import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Image Gallery',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileScreenStack() {
  return (
    <View>
      <Text>This is Profile</Text>
    </View>
  );
}

export default function HomeStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeScreenStack} />
      <Tab.Screen name="Profile" component={ProfileScreenStack} />
    </Tab.Navigator>
  );
}
