import React, { useState } from "react";
import { View, Text, Dimensions, Animated, ScrollView, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';

const { width, height } = Dimensions.get("screen");

const BottomSheet: React.FC = () => {
    const [alignment] = useState(new Animated.Value(0));

    const bringUpActionSheet = () => {
        Animated.timing(alignment, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };
    const hideTheActionSheet = () => {
        Animated.timing(alignment, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const actionSheetIntropolate = alignment.interpolate({
        inputRange: [0, 1],
        outputRange: [-height / 2.4 + 50, 0]
    });

    const actionSheetStyle = {
        bottom: actionSheetIntropolate
    }

    const gestureHandler = (e:any) => {
        if (e.nativeEvent.contentOffset.y > 0) bringUpActionSheet();
         else if(e.nativeEvent.contentOffset.y<0) hideTheActionSheet();


    }

    return (
        <Animated.View style={[{
            position: 'absolute',
            // alignItems: 'center',
            left: 0,
            right: 0,
            bottom: 0,
            height: height / 2.4,
            backgroundColor: 'green',
            borderTopRightRadius: 40,
            // borderTopLeftRadius: 40,
            width: width / 1.05,
            marginHorizontal: 10
        }, actionSheetStyle]}>
            <View>
                <ScrollView horizontal  
                onScroll={(e) => gestureHandler(e)}
                    style={{ width: 60, borderTopWidth: 5, borderTopColor: '#aaa' }}></ScrollView>
            </View>

            <Text>is bottomSheet</Text>
        </Animated.View>
    )
}
export default BottomSheet;