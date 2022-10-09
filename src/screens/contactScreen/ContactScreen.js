import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import HeaderComponent from '../../components/headerComponent/HeaderComponent';
import { useFonts } from 'expo-font';


const ContactScreen = () => {
    return (
        <>
            <HeaderComponent />
            <View style={styles.container}>
                <Image style={styles.image} source={require('../../../assets/images/scan.png')}></Image>
                <View style={styles.contentinfo}>
                    <Text style={styles.headTitle}>تواصل معنا على:</Text>
                    <Text style={styles.subTitle}>
                        infa@afaa8.com
                        {"\n"}
                        0096652709005
                        {"\n"}
                        العنوان : المملكة العربيةالسعودية
                    </Text>
                </View>
            </View>
        </>
    )
}

export default ContactScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 49 + 70.2,
        marginBottom: 78.3,
    },
    image: {
        width: 256.37,
        height: 256.73,
        marginTop: 49,
    },
    contentinfo: {
        alignItems: 'flex-end',
        marginTop: 56,
        marginRight: 59,
        marginLeft: 153,
    },
    headTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#262626',
    },
    subTitle: {
        fontSize: 12,
        marginLeft: 48,
        marginRight: 15,
        color: '#676767',
        marginBottom: 17,
        lineHeight: 24,
    },

})