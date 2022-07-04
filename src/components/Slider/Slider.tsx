import React, { useRef, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ListRenderItem } from 'react-native';
import Iconslider from 'react-native-vector-icons/AntDesign';
import styles from './style';
import {PropSliderType} from './type';


const Slider: React.FC<PropSliderType> = ({ values, renderItem,styleSlider }) => {

    const [current, setCurrent] = useState<number>(0);
    const FlatListRef = useRef<FlatList>(null);
    const lenght = values.length;

    useEffect(() => {
        FlatListRef.current?.scrollToIndex({ index: current, animated: true });
    }, [current]);


    const goNextSlide = () => {
        setCurrent(current < lenght - 2 ? current + 1 : 0);
        FlatListRef.current?.scrollToIndex({ index: current, animated: true })
    };

    const goPrevSlide = () => {
        setCurrent(current >= 1 ? current - 1 : lenght - 1);
        FlatListRef.current?.scrollToIndex({ index: current, animated: true })
    };
    return (
        <View style={[styles.slider,{...styleSlider}]}>
            {/* <View style={styles.viewRightLeftSlider}> */}
            {/* <TouchableOpacity onPress={goPrevSlide} style={[styles.cardCircleSlider,{left:5, top: top}]}>
                    <Iconslider name="left" color="#5668E8" size={24} />
                </TouchableOpacity>

                <TouchableOpacity onPress={goNextSlide} style={[styles.cardCircleSlider,{left:5, top: top}]}>
                    <Iconslider name="right" color="#5668E8" size={24} />
                </TouchableOpacity> */}
            {/* </View> */}
            <FlatList
                data={values}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                // pagingEnabled={true}
                ref={FlatListRef}
                keyExtractor={p => p._id}
                renderItem={renderItem}
                contentContainerStyle={{ paddingHorizontal: 5 }}
            />
        </View>
    )
}
export default Slider;
