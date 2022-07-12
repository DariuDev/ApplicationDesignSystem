import React from 'react';
import { View, StyleSheet, Text, Pressable, Dimensions } from 'react-native';
import { LayotType } from './type';
const { width, height } = Dimensions.get('screen');

const LayoutTableWithoutBorder = (
    { column, data, children, styleItem, styleLayout,
        colorBorder, widthBorder }: LayotType) => {
    let lenghtData = data.length;

    const styleBorderItem = (index: number) => {
        if (column === 3 && (lenghtData === 9)) {
            if (index === 5) {
                return { borderTopColor: colorBorder, borderBottomColor: colorBorder,
                     borderLeftColor: colorBorder, borderBottomWidth: widthBorder,
                      borderLeftWidth: widthBorder, borderTopWidth: widthBorder }
            }
            if (index === 6) {
                return { borderRightColor: colorBorder, borderRightWidth: widthBorder }
            }
            if ((index === 8)) {
                return { borderLeftColor: colorBorder, borderLeftWidth: widthBorder }
            }
            if (index === 1 || index === 4) {
                return { borderBottomColor: colorBorder, borderBottomWidth:widthBorder }
            }
            if (index === 2) {
                return { borderBottomColor: colorBorder, borderBottomWidth: widthBorder,
                     borderLeftColor: colorBorder, borderLeftWidth: widthBorder }
            }
            if ((index !== 4) && (index !== 1) && (index !== 2) && (index !== 5) && (index !== 6) && (index !== 7) && (index !== 8)) {
                return { borderBottomColor: colorBorder, borderRightColor: colorBorder,
                     borderBottomWidth: widthBorder, borderRightWidth: widthBorder }

            }
        }
        if ((column === 2) && (lenghtData === 4)) {
            if ((index === 0)) {
                return { borderBottomColor: colorBorder, borderBottomWidth: widthBorder }
            }
            if ((index === 1)) {
                return { borderLeftColor: colorBorder, borderBottomColor: colorBorder,
                     borderLeftWidth: widthBorder, borderBottomWidth: widthBorder }
            }
            if ((index === 3)) {
                return { borderLeftColor: colorBorder, borderLeftWidth: widthBorder }
            }

        }
        else if ((column === 2) && (lenghtData === 6)) {
            if ((index === 0) || (index === 2)) {
                return { borderBottomColor: colorBorder, borderBottomWidth: widthBorder }
            }
            if ((index === 1) || (index === 3)) {
                return { borderLeftColor:colorBorder, borderBottomColor: colorBorder,
                 borderLeftWidth: widthBorder, borderBottomWidth: widthBorder }
            }
            if ((index === 5)) {
                return { borderLeftColor: colorBorder, borderLeftWidth: widthBorder }
            }
        }
    }

    if (lenghtData % column === 0) {
        return (

            <View style={{
                alignItems: 'flex-end',
                alignSelf: 'center',
                flexDirection: 'row', flexWrap: 'wrap',
                marginHorizontal: 17,
                marginVertical: 10,
                ...styleLayout
            }}>
                {data.map((item, index) => {
                    return <Pressable onPress={() => console.log(index)} style={{
                        height: 120,
                        alignItems: "center",
                        // alignSelf: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#fff',
                        flexDirection: 'column',
                        width: width / (column / 10 + column),
                        ...styleBorderItem(index),
                        ...styleItem

                    }} key={item._id}>
                        <>
                            <View style={{ width: 50, height: 50, backgroundColor: 'pink' }} />
                            <Text>{item.title}</Text>
                        </>

                        {/* {children} */}
                    </Pressable>


                }

                )}
            </View>

        );
    }
    else {
        return null
    }

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

