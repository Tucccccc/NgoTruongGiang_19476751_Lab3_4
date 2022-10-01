import { Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function Screen2({ navigation }) {
    const title = "Điện thoại VSmart Joy 3\nHàng chính hãng"
    var blue = require('../image/xanh.png');
    var red = require('../image/do.png');
    var black = require('../image/den.png');
    var image = { blue, red, black };
    var [link, setLink] = useState(image.blue);
    var [title_color, setTitle_color] = useState("");
    var [color, setColor] = useState("");

    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{ flex: 0.3, flexDirection: 'row' }}>
                <Image style={{ width: 125, height: 125, marginTop: 42, marginLeft: 10, alignSelf: 'flex-start' }} source={link} />
                <View style={{ flexDirection: 'column', marginLeft: 15, marginTop: 30 }}>
                    <Text style={{ marginTop: 15, fontSize: 18 }}>{title}</Text>
                    <View style={{ marginTop: 9, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18 }}>{title_color}</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{color}</Text>
                    </View>
                    <Text style={{ marginTop: 9, fontSize: 18, fontWeight: 'bold' }}>1.800.000</Text>
                </View>
            </View>

            <View style={{ flex: 1, backgroundColor: '#dfe3e3', marginTop: 20 }}>
                <Text style={{ fontSize: 15, marginLeft: 17, marginTop: 10 }}>Chọn 1 màu bên dưới: </Text>
                <TouchableOpacity onPressIn={onPressRed} style={{ alignSelf: 'center', width: 250, height: 25, backgroundColor: 'red', marginTop: 15 }}></TouchableOpacity>
                <TouchableOpacity onPressIn={onPressBlack} style={{ alignSelf: 'center', width: 250, height: 25, backgroundColor: 'black', marginTop: 15 }}></TouchableOpacity>
                <TouchableOpacity onPressIn={onPressBlue} style={{ alignSelf: 'center', width: 250, height: 25, backgroundColor: 'blue', marginTop: 15 }}></TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Home', { message: link, })} style={{ marginTop: 60, flexDirection: "row", borderRadius: 10, borderWidth: 0.8, width: 332, height: 50, alignSelf: 'center', justifyContent: 'center', marginVertical: 30, backgroundColor: '#1789ff' }}>
                    <Text style={{ alignSelf: 'center', fontSize: 16, lineHeight: 21, fontWeight: 'bold', color: 'white' }}>XONG</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ScreenFlatList')} style={{ marginTop: 60, flexDirection: "row", borderRadius: 10, borderWidth: 0.8, width: 332, height: 50, alignSelf: 'center', justifyContent: 'center', marginVertical: 30, backgroundColor: '#1789ff' }}>
                    <Text style={{ alignSelf: 'center', fontSize: 16, lineHeight: 21, fontWeight: 'bold', color: 'white' }}>MÀN HÌNH FLATLIST</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

    function onPressRed() {
        return (
            setLink(image.red)
        );
    }
    function onPressBlack() {
        return (
            setLink(image.black)
        );
    }
    function onPressBlue() {
        return (
            setLink(image.blue)
        );
    }
}
