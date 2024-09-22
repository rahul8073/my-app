import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tabs from './Tabs';
import HomeScreen from '../screens/UpcomingScreen';
import MuvieDetailScreen from '../screens/MuvieDetailScreen';

export default function Navigation() {
    const stack=createNativeStackNavigator();
  return (
    <stack.Navigator initialRouteName='tabs'>

        <stack.Screen name='tabs' component={Tabs} options={{headerShown:false}}/>
        <stack.Screen name='muvieDetail' component={MuvieDetailScreen} options={{headerShown:false}}/>
    </stack.Navigator>
  )
}