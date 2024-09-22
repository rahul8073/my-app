import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import MovieCard from '../components/MuvieCard'

export default function TopRatedScreen() {
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