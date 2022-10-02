import { Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Screen1({ navigation }) {
  const route = useRoute();

  var blue = require('../image/xanh.png')
  var [link, setLink] = useState(blue)

  useEffect(() => {
    if (route.params != null)
      setLink(route.params.message)
  });
  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <Image style={{ width: 270, height: 325, marginTop: 50, alignSelf: 'center' }} source={link} />
      <Text style={{ textAlign: 'center', marginTop: 26, fontSize: 18 }}>Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <View style={{ alignSelf: 'flex-start', flexDirection: 'row' }}>
        <AntDesign name='star' style={{ color: "#eee8aa", fontSize: 20, marginLeft: "5%", marginTop: "2%" }}></AntDesign>
        <AntDesign name='star' style={{ color: "#eee8aa", fontSize: 20, marginTop: "2%" }}></AntDesign>
        <AntDesign name='star' style={{ color: "#eee8aa", fontSize: 20, marginTop: "2%" }}></AntDesign>
        <AntDesign name='star' style={{ color: "#eee8aa", fontSize: 20, marginTop: "2%" }}></AntDesign>
        <AntDesign name='star' style={{ color: "#eee8aa", fontSize: 20, marginTop: "2%" }}></AntDesign>
        <Text style={{ fontSize: 15, marginHorizontal: 25, marginTop: 13 }}>(Xem 828 đánh giá)</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 16 }}>
        <Text style={{ fontSize: 21, fontWeight: 'bold', marginHorizontal: 23 }}>1.790.000 đ</Text>
        <Text style={{ fontSize: 20, marginHorizontal: 23, textDecorationLine: 'line-through' }}>1.800.000 đ</Text>
      </View>
      <View style={{ alignSelf: 'flex-start', flexDirection: 'row' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ff0000', marginHorizontal: 23, marginTop: 27 }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Option')} activeOpacity={0.5} style={{ flexDirection: "row", borderRadius: 10, borderWidth: 0.8, width: 332, height: 40, alignSelf: 'center', marginTop: 19 }}>
        <Text style={{ marginLeft: 100, alignSelf: 'center', fontSize: 16, lineHeight: 21, fontWeight: 'bold', color: 'black' }}>4 MÀU - CHỌN MÀU</Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.5} style={{ flexDirection: "row", borderRadius: 10, borderWidth: 0.8, width: 332, height: 50, alignSelf: 'center', justifyContent: 'center', marginVertical: 160, backgroundColor: 'red' }}>
        <Text style={{ alignSelf: 'center', fontSize: 16, lineHeight: 21, fontWeight: 'bold', color: 'white' }}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
}