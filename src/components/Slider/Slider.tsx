import React, { useRef, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, FlatListProps } from 'react-native';
import styles from './style';
import { PropSliderType } from './type';

type PropSlider = PropSliderType & FlatListProps<any>;
const Slider: React.FC<PropSlider> = ({ isTopChildren , data, renderItem, styleSlider, children, ...otherProps }) => {

  
    return (
        <View style={ { ...styleSlider }}>
            {/* <View style={styles.viewRightLeftSlider}> */}
            {/* <TouchableOpacity onPress={goPrevSlide} style={[styles.cardCircleSlider,{left:5, top: top}]}>
                    <Iconslider name="left" color="#5668E8" size={24} />
                </TouchableOpacity>

                <TouchableOpacity onPress={goNextSlide} style={[styles.cardCircleSlider,{left:5, top: top}]}>
                    <Iconslider name="right" color="#5668E8" size={24} />
                </TouchableOpacity> */}
            {/* </View> */}
            {isTopChildren!==null && !isTopChildren && children}
            <FlatList
                data={data}
                horizontal={true}
                // style={{ marginEnd: 20}}
                showsHorizontalScrollIndicator={false}
                // pagingEnabled={true}
                keyExtractor={p => p._id}
                renderItem={renderItem}
                {...otherProps}
            />
            {isTopChildren!==null && isTopChildren && children}
        </View>
    )
}
export default Slider;
