import React from 'react'
import { FlatList, View, Text, Image, Pressable } from 'react-native'
import data from '../data/flatListData'


export default function Screen3({ navigation }) {
    return (
        <View style={{ flex: 1, marginTop: "10%", marginBottom: "10%" }}>
            <FlatList data={data}
                renderItem={
                    ({ item, index }) => {
                        return (
                            <View style={{ width: "100%", display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                                <Image source={{ uri: item.photo }} style={{ width: 125, height: 125 }} />
                                <View style={{ display: 'flex', flexDirection: 'column', marginLeft: 10, width: "35%" }}>
                                    <Text>{item.name}</Text>
                                    <Text style={{ marginTop: "15%" }}>{item.email}</Text>
                                </View>
                                <Pressable style={{ backgroundColor: "#f5f5dc", height: "25%", width: "20%", marginTop: "auto", marginBottom: "auto" }}>
                                    <Text style={{ alignSelf: "center", marginTop: "6%" }}>CHAT</Text>
                                </Pressable>
                            </View>
                        )
                    }
                } >
            </FlatList>
            <Pressable style={{ backgroundColor: "#f5f5dc", height: "5%", width: "80%", marginLeft: "auto", marginRight: "auto", marginTop: "5%"}} onPress={() => {navigation.navigate("ScreenGridList")}}>
                <Text style={{ alignSelf: "center", marginTop: "1.5%" }}>GRID SCREEN</Text>
            </Pressable>
        </View>
    )
}