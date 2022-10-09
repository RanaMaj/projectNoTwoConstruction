import { View, Text } from 'react-native'
import React from 'react'
import HomeComponent from '../../components/homeComponent/HomeComponent'
import HeaderComponent from '../../components/headerComponent/HeaderComponent'
import NavigationComponent from '../../components/navigationComponent/NavigationComponent'

const HomeScreen = () => {
    return (
        <>
            <HeaderComponent />
            <HomeComponent />
            <NavigationComponent />
        </>
    )
}

export default HomeScreen