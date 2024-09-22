import React, { useState } from 'react';
import {View, Text, Image, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function MovieCard() {
const navigation=useNavigation();
const Detailhandleclick=(id)=>{
  console.log(id);
  navigation.navigate('muvieDetail',{ id: id })
  
}

return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap',justifyContent:'space-between', padding:wp('3%'),rowGap:hp('2%')}}>
    {Array.from({ length: 6 }).map((item, index) => (
      <TouchableOpacity key={index} style={{ width: wp('45%') }} onPress={() => Detailhandleclick(item?.id)}>
        <View style={{ borderWidth: wp('1%'), borderColor: 'black', borderRadius: wp('5%') }}>
          <Image
            source={require('../Assets/img1.jpg')}
            style={{ height: hp('30%'), width:'100%', borderWidth: 4, borderColor: 'orange', borderRadius: 20 }}
          />
        </View>
        <Text style={{ color: 'gray', textTransform: 'uppercase', textAlign: 'center', fontSize: 12 }}>
          {index} name
        </Text>
        <Text style={{ color: 'white',textAlign:'center' }}>demo {index}</Text>
      </TouchableOpacity>
    ))}
  </View>
  );
}
