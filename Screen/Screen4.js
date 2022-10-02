import React from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import data from '../data/flatListData'
import AntDesign from "react-native-vector-icons/AntDesign";

const Item = ({ photo, name, price }) => (
  <View style={{ width: "35%", display: 'flex', flexDirection: 'column', marginTop: 10, marginLeft: "5%", marginRight: "5%" }}>
    <Image source={{ uri: photo }} style={{ width: 125, height: 125 }}></Image>
    <Text>{name}</Text>
    <View style={{ display: "flex", flexDirection: "row" }}>
      <AntDesign name='star' style={{ color: "#eee8aa", fontSize: 20 }}></AntDesign>
      <AntDesign name='star' style={{ color: "#eee8aa", fontSize: 20 }}></AntDesign>
      <AntDesign name='star' style={{ color: "#eee8aa", fontSize: 20 }}></AntDesign>
      <AntDesign name='star' style={{ color: "#eee8aa", fontSize: 20 }}></AntDesign>
      <AntDesign name='star' style={{ color: "#eee8aa", fontSize: 20 }}></AntDesign>
    </View>
    <View style={{display: "flex", flexDirection: "row"}}>
      <Text style={{ fontWeight: "bold" }}>{price}</Text>
      <Text style={{ textDecorationLine: 'line-through', marginLeft: "30%" }}>35%</Text>
    </View>
  </View>
);

export default function Screen4() {

  const renderItem = ({ item }) => (
    <Item photo={item.photo} price={item.price} name={item.name} />
  );

  return (
    <View style={{ flex: 1, marginBottom: "10%", marginTop: "10%", marginLeft: "auto", marginRight: "auto" }}>
      <FlatList
        data={data}
        renderItem={
          renderItem
        }
        numColumns={2}
      >
      </FlatList>
    </View>
  );
}