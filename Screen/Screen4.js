import React, { useState } from 'react'
import { View, Text, SafeAreaView, FlatList, Image, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import data from '../data/flatListData'

export default function Screen4() {
  return (
    <View style={{ flex: 1, marginBottom: "10%", marginTop: "10%" }}>
      <FlatList
        data={data}
        renderItem={
          (item) => {
            return (
              <View style={{ width: "100%", display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                <Image source={{ uri: item.photo }} style={{ width: 125, height: 125 }}></Image>
                <Text>{item.name}</Text>
              </View>
            )
          }
        }
        numColumns={2}
      >
      </FlatList>
    </View>
  );
}