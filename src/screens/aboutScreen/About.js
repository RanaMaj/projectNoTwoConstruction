import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../assets/images/onBordingImage2.png')}></Image>
            
            <Text style={styles.headTitle}>من نحن</Text>
            <Text style={styles.subTitle}>نقوم بتنفيذ جميع مقاولات واعمال البناء بجميع المراحل بداية من
                اعمال الحفر للأساسات مرورا بجميع المراحل وحتى اعمال تركيب
                الكهرباء والسباكة والنجارة واعمال السيراميك والرخام والواجهات
                والدهانات.

            </Text>
            <Text style={styles.subTitle}>نقدم مجموعة كبيرة ومتميزة من الافكار والتصميمات لتشطيب
                العقارات والوحدات السكنية والشركات والهيئات والمؤسسات
                الحكومية وغيرها من الوحدات وتركيب كافة الخدمات واعمال
                التشطيبات الكاملة.
            </Text>
            <Text style={styles.subTitle}>نقدم كافة الخدمات الخاصة بتصميم الديكورات وفق احدث الاساليب
                المتطورة والاشكال العصرية</Text>
        </View>
    )
}

export default AboutScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 49,
    },
    image: {
        width: 138.59,
        height: 163.02,
        marginTop: 49,
    },
    headTitle: {
        fontSize: 29,
        fontWeight: 'bold',
        marginTop: 56,
        marginBottom: 51,
        color: '#848698'
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