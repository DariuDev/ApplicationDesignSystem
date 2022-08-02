import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, SafeAreaView, ToastAndroid } from 'react-native';



export default function TestScrollInfnit() {

    var dishList = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ]
    const [dishes, setDishes] = useState(dishList)
    var count = 0;

    useEffect(() => {
        console.log("use")
    }, [dishes])

    const CustomDish = (props: any) => {
        return (
            <View style={styles.item}>
                <TouchableOpacity  >
                    <Text style={styles.title}>{props.title} = {props.id}</Text>
                </TouchableOpacity>
            </View>
        )
    };

    const renderItem = ({ item }: any) => (
        <CustomDish title={item.title} id={item.id} />
    );

    function addItem() {
        count = count + 1;
        console.log("Count: " + count);
        var i = {
            id: `${count}`,
            title: `${count + " Item"}`,
        }
        let dishTemp = [...dishes];
        dishTemp.push(i);
        setDishes(dishTemp);
        console.log("state length: " + dishes.length);
        console.log("list length: " + dishList.length);
    }

    function renderScreen() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: 'blue', flex: 1, width: '100%', height: "100%" }}>
                    <SafeAreaView style={{ margin: 20 }} >
                        <FlatList
                            data={dishes}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </SafeAreaView>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.button} onPress={addItem} >
                        <Text style={styles.buttonText} >Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText} >Remove</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderScreen()}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: { alignSelf: 'auto', backgroundColor: 'red', height: 50, width: 100, justifyContent: "center", margin: 10 },
    buttonText: { alignSelf: 'center', fontWeight: 'bold' },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
    },

});