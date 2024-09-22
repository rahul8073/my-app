import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MovieCard from '../components/MuvieCard'

export default function UpcomingScreen() {
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

const styles = StyleSheet.create({})