import { View, Text, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import styles from './style'

const ServiceDetailsScreen = () => {
    const { params } = useRoute();
    const { item } = params;
    return (
        <View style={styles.container}>
            <Text>{item.subTitle}</Text>
            <Image source={item.iconImage} />
        </View>
    );
};

export default ServiceDetailsScreen;

