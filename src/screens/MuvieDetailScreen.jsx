import { View, Text, ScrollView, Image, TouchableOpacity, LogBox, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default function MuvieDetailScreen() {

    const navigation = useNavigation();
    const Back = () => {
        navigation.goBack();
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'orange', padding: wp('2%') }} >
            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
            />
            <TouchableOpacity style={{ flexDirection: 'row', marginVertical: hp('1%'), alignItems: 'center', gap: wp('2%') }} onPress={Back}>
                <View style={{margin:wp('1%')}}>
                    <Icon name="chevron-left" size={12} color="white" />
                </View>
                <Text  style={{color:'#fff',marginBottom:hp('0.4%')}}>Back</Text>

            </TouchableOpacity>
            <ScrollView className=''>
                <View className="">
                    <View style={{borderRadius:wp('5%')}}>

                        <Image
                            source={require('../Assets/img1.jpg')}
                            style={{height:hp('50%'),width:'100%',borderRadius:wp('5%')}}
                        />
                    </View>

                    <Text style={{color:'#fff',fontSize:wp('6%'),textTransform:'uppercase',textAlign:'center'}}>
                        Release date
                    </Text>
                    <Text style={{color:'#fff',fontSize:wp('5%')}} >original Title</Text>
                    <View>
                        <Text style={{color:'#fff',fontSize:wp('5%'),textDecorationLine:'underline'}} >Overview</Text>
                        <Text style={{color:'#000',fontSize:wp('4%')}}>overview discription</Text>
                    </View>
                </View>

            </ScrollView>
        </View>

    )
}