import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const image = require('../../../assets/headerContent/bgHeader.png');

const HeaderComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>المقاولات</Text>
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.image}>
            </ImageBackground>
        </View >
    )
}

export default HeaderComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 10,
        position: 'relative',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        width: '100%',
        height: 120,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: "bold",
        zIndex: 13,
        position: 'absolute',
        marginTop: 58,
    }
})