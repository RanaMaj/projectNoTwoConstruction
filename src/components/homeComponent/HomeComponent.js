import { FlatList, StyleSheet, Item, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const dataList = [
    {
        id: 1,
        iconImage: require('../../../assets/images/icon2.png'),
        subTitle: 'التعريف بقطاع المقاولات'
    },
    {
        id: 2,
        iconImage: require('../../../assets/images/icon1.png'),
        subTitle: 'متطلبات تأسيس منشاة مقاولات'
    },
    {
        id: 3,
        iconImage: require('../../../assets/images/icon4.png'),
        subTitle: 'تراخيص مزاولة نشاط المقاولات'
    },
    {
        id: 4,
        iconImage: require('../../../assets/images/icon3.png'),
        subTitle: ' قواعد وإجراءات أساسية بشأن التعاقد '
    },
    {
        id: 5,
        iconImage: require('../../../assets/images/icon6.png'),
        subTitle: 'الجهات ذات العلاقة  '
    },
    {
        id: 6,
        iconImage: require('../../../assets/images/icon5.png'),
        subTitle: 'منصات الكترونية في خدمة المقاول'
    },
    {
        id: 7,

        iconImage: require('../../../assets/images/icon8.png'),
        subTitle: 'خطة عمل المشروعات وتدفقاتها المالية'
    },
    {
        id: 8,

        iconImage: require('../../../assets/images/icon7.png'),
        subTitle: 'آليات تسليم مشاريع المقاولات'
    },
    {
        id: 9,

        iconImage: require('../../../assets/images/icon10.png'),
        subTitle: 'أنظمة عقود المقاولات '
    },
    {
        id: 10,
        iconImage: require('../../../assets/images/icon9.png'),
        subTitle: 'علاقة  المقاول مع مكاتب وإجراءات السلامة'
    },
    {
        id: 11,

        iconImage: require('../../../assets/images/icon12.png'),
        subTitle: 'الجانب الاجتماعي والوطني '
    },
    {
        id: 12,

        iconImage: require('../../../assets/images/icon11.png'),
        subTitle: 'لجنة المقاولات: \n رسالتها- أهدافها – إنجازاتها'
    },
];

const RenderItem = ({ item }) => {
    const { navigate } = useNavigation();
    return (
        <Pressable
            onPress={() => navigate("ServiceDetailsScreen", { item })}
            style={styles.vewCard}
        >
            <View style={styles.imageContainer}>
                <Image source={item.iconImage} style={styles.image} />
            </View>
            <Text style={styles.subTitle}>{item.subTitle}</Text>
        </Pressable>
    );
};
const keyExtractor = (item) => item.id;

const headerComponent = () => {
    return <Text style={styles.listHeaderline}>الفهرس</Text>
}

const HomeComponent = ({ navigation }) => {
    return (
        <FlatList
            data={dataList}
            renderItem={({ item }) => <RenderItem item={item} />}
            keyExtractor={keyExtractor}
            numColumns={2}
            onP
            ListHeaderComponent={headerComponent}
            ListHeaderComponentStyle={styles.HeaderTitle}
            ListEmptyComponent={<Text>This is a vary flat list</Text>}
        />
    )
}

export default HomeComponent

const styles = StyleSheet.create({
    listHeaderline: {
        color: '#000000',
        fontSize: 21,
        fontWeight: 'bold',
        marginHorizontal: 23,
        marginTop: 108,

    },
    vewCard: {
        width: 159,
        height: 136,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        borderRadius: 5,
        marginVertical: 15,
        marginRight: 21,
        marginLeft: 21,
    },
    imageContainer: {
        width: 49,
        height: 49,
        backgroundColor: '#F8F8FF',
        borderWidth: 1,
        borderColor: '#A2AFCE',
        borderRadius: 100,
        justifyContent: 'center',
        alignContent: 'center'
    },
    image: {
        alignSelf: 'center',
    },
    subTitle: {
        textAlign: 'center',
    },
})