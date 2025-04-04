import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import AuPairScreen from '../screens/AuPairScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const PlaceholderScreen = ({ route }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 18 }}>{route.name} Screen Coming Soon</Text>
    </View>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          
          if (route.name === 'Explore') {
            iconName = 'search';
          } else if (route.name === 'Saved') {
            iconName = 'heart';
          } else if (route.name === 'Trips') {
            iconName = 'paper-plane';
          } else if (route.name === 'Inbox') {
            iconName = 'mail';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }
          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FF5A5F',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Explore" component={HomeScreen} />
      <Tab.Screen name="Saved" component={AuPairScreen} />
      <Tab.Screen name="Trips" component={PlaceholderScreen} />
      <Tab.Screen name="Inbox" component={PlaceholderScreen} />
      <Tab.Screen name="Profile" component={PlaceholderScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;