import { View, Text } from 'react-native'
import React from 'react'
import MovieCard from '../components/MuvieCard'
import { ScrollView } from 'react-native'

export default function TrendingScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'orange' }}>
    <View>
        {/* caroussel and banner section */}
        <View>

        </View>
        {/* muvies card section */}
        <View>
            <MovieCard/>
        </View>
    </View>


</ScrollView>
  )
}