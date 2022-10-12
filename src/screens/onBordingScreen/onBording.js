import {
    StyleSheet, View, Image, FlatList, Dimensions, Pressable, Text, Button
} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');


const data = [
    {
        id: '1',
        imageBording: require('../../../assets/images/onBordingImage1.png')
    },
    {
        id: '2',
        imageBording: require('../../../assets/images/onBordingImage2.png')
    },
];


const Item = ({ imageBording }) => (
    <View
        style={{
            padding: 60,
            marginVertical: 8,
            marginHorizontal: 16,
        }}>
        <Image style={styles.imageBording} source={imageBording} />
    </View>
);



const OnBOrdingScreen = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

    const updateCurrentSlideIndex = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        console.log(contentOffsetX);
        const currentIndex = Math.round(contentOffsetX / width);
        console.log(currentIndex);
        setCurrentSlideIndex(currentIndex);
    };
    console.log('====================================');
    console.log({ currentSlideIndex });
    console.log('====================================');

    const Footer = () => {
        return (
            <View
                style={
                    {
                        height: 0.25,
                        justifyContent: 'space-between',
                        paddingHorizontal: 20
                    }}>
                <View style={
                    {
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: 20
                    }
                }>
                    {data.map((_, index) => (
                        <View key={index} style={[styles.indecator, currentSlideIndex == index && {
                            backgroundColor: '#AEAEAE',
                            width: 11,
                        }]} />
                    ))}
                </View>
            </View >
        );
    };


    const renderItem = ({ item }) => <Item imageBording={item.imageBording} id={item.id} />;
    const keyExtractor = (item) => item.id;
    const onScroll = (value) => {
    }
    const { navigate } = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{ height: 500 }}>
                <FlatList
                    horizontal
                    onMomentumScrollBegin={updateCurrentSlideIndex}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={onScroll}
                />
                <Footer />
            </View>
            <View>
                <Pressable
                    style={styles.skipBtn}
                    onPress={() => navigate("BottomStack", { screen: '' })} >
                    <Text>Skip</Text>
                </Pressable></View>
        </View >
    )
}

export default OnBOrdingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageBording: {
        width: 252,
        height: 300,
    },
    viewBordingBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    indecator: {
        height: 11,
        width: 11,
        backgroundColor: '#0C0303',
        marginHorizontal: 3,
        borderRadius: 100,
    },
    skipBtn: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#AEAEAE',
        width: 150,
        height: 50,
        marginTop: 125,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    }
})
