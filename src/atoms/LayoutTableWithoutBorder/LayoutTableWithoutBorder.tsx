import React from 'react';
import { View, StyleSheet, Text, Pressable, Dimensions } from 'react-native';
import { LayotType } from './type';
const { width, height } = Dimensions.get('screen');



const LayoutTableWithoutBorder = ({ column, data }: LayotType) => {

    const styleBorderItem = (index: number) => {
        let styleBorder;
        if (index === 2) {
            return styleBorder = { borderBottomColor: '#000', borderLeftColor: '#000', borderBottomWidth: 1, borderLeftWidth: 1 }
        }
        if (index === 5) {
            return styleBorder = { borderTopColor: '#000', borderBottomColor: '#000', borderLeftColor: '#000', borderBottomWidth: 1, borderLeftWidth: 1, borderTopWidth: 1 }
        }
        if (index === 6) {
            return styleBorder = { borderRightColor: '#000', borderRightWidth: 1 }
        }
        if (index === 8) {
            return styleBorder = { borderLeftColor: '#000', borderLeftWidth: 1 }
        }
        else if ((index !== 2) && (index !== 5) && (index !== 6) && (index !== 7) && (index !== 8)) {
            return styleBorder = { borderBottomColor: '#000', borderRightColor: '#000', borderBottomWidth: 1, borderRightWidth: 1 }

        }

    }
    // let styleBorder =styleBorderItem(2);


    return (

        <View style={{
            // backgroundColor: 'pink',
            alignItems: 'flex-end',
            alignSelf: 'center',
            flexDirection: 'row', flexWrap: 'wrap',
            marginHorizontal: 17,
            marginVertical: 10,
        }}>
            {data.map((p, index) =>
            (
                <Pressable onPress={() => console.log(index)} style={{
                    height: 120,
                    alignItems: "center",
                    alignSelf: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#fff',
                    flexDirection: 'column',
                     width: width / (column / 10 + column),
                    ...styleBorderItem(index)
                }} key={p._id}>

                    <View style={{ width: 50, height: 50, backgroundColor: 'pink' }} />
                    <Text>{p.title}</Text>


                </Pressable>
            )
            )}
        </View>



    );
}


const styles = StyleSheet.create({
    gridContainer: {
        width: 220,
    },
    rowStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    cellStyle: {
        flex: 1,
        margin: 10,
    },
})

export default LayoutTableWithoutBorder;

