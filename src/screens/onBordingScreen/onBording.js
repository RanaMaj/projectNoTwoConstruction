import { StyleSheet, View, Image, FlatList, Text, Pressable } from 'react-native'
import React from 'react'

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

// const flatListItems = Array(2)
//     .fill()
//     .map(() => ({ imageBording: data.imageBording, id: data.id }));

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
    const renderItem = ({ item }) => <Item imageBording={item.imageBording} id={item.id} />;
    const keyExtractor = (item) => item.id;
    const onScroll = (value) => {
        console.log(value.nativeEvent);
        console.log(value.contentOffset);
    }
    return (
        <View style={styles.container}>
            <View style={{ height: 500 }}>
                <FlatList
                    horizontal
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={onScroll}
                />
                <View style={styles.viewBordingBtn}>
                    <Pressable
                        onPress={onScroll}
                        style={styles.btnBordingactive}
                    />
                    <Pressable
                        style={styles.btnBording} />
                </View>
            </View>
        </View>
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
    btnBordingactive: {
        backgroundColor: '#0C0303',
        width: 14,
        height: 14,
        borderRadius: 100,
        marginHorizontal: 8
    },
    btnBording: {
        backgroundColor: '#AEAEAE',
        width: 14,
        height: 14,
        borderRadius: 100,
    }
})
