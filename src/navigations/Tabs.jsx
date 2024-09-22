import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TopRatedScreen from '../screens/TopRatedScreen';
import TrendingScreen from '../screens/TrendingScreen';
import UpcomingScreen from '../screens/UpcomingScreen';
import PopularMovieScreen from '../screens/PopularMovieScreen';
import Icon from 'react-native-vector-icons/Ionicons';
export default function Tabs() {
    const Tab=createBottomTabNavigator();
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Upcoming') {
          iconName = focused ? 'film' : 'film-outline';
        } else if (route.name === 'TopRated') {
          iconName = focused ? 'star' : 'star-outline';
        } else if (route.name === 'Trending') {
          iconName = focused ? 'flame' : 'flame-outline';
        } else if (route.name === 'Popular') {
          iconName = focused ? 'thumbs-up' : 'thumbs-up-outline';
        }

        // Return the icon component
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'orange', // Color when tab is focused
      tabBarInactiveTintColor: 'gray', // Color when tab is not focused
      tabBarLabelStyle: { fontSize: 12 }, // Customize label style
      tabBarShowLabel: true, // Set to false to hide labels
      tabBarStyle:{backgroundColor:'pink',paddingBottom: 10,height:60}
    
    })}
  >
    <Tab.Screen name="Upcoming" component={UpcomingScreen} options={{ headerShown: false }} />
    <Tab.Screen name="TopRated" component={TopRatedScreen} options={{ headerShown: false }} />
    <Tab.Screen name="Trending" component={TrendingScreen} options={{ headerShown: false }} />
    <Tab.Screen name="Popular" component={PopularMovieScreen} options={{ headerShown: false }} />
  </Tab.Navigator>
  )
}