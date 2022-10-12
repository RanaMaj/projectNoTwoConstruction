import { View, Text, Pressable } from 'react-native'
import React from 'react'
import HomeComponent from '../../components/homeComponent/HomeComponent'
import HeaderComponent from '../../components/headerComponent/HeaderComponent'

const onPress = () => {
    console.log('Hello')
}

const HomeScreen = () => {
    return (
        <>
            <HeaderComponent />
            <HomeComponent />
        </>
    )
}

export default HomeScreen