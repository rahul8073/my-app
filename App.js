import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './src/navigations/Navigation'


export default function App() {
    return (
        <>
         <StatusBar
                animated={true}
                backgroundColor="#61dafb"
            />
        <NavigationContainer>
            <Navigation />
        </NavigationContainer>
        </>
    )
}