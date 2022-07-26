import React from 'react';
import { View, Dimensions } from "react-native";
// import Carousel from 'react-native-snap-carousel';
import type { ISliderCarousel } from '.';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.9;

const SliderCarousel = ({ itemWideth = ITEM_WIDTH, data,renderItem }: ISliderCarousel ) => {
    const isCarousel = React.useRef(null);
    // const [index, setIndex] = React.useState(0)
    return (
        <View style={{ flex: 1 }}>
            {/* <Carousel
                layout="default"
                ref={isCarousel}
                data={data}
                renderItem={renderItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={itemWideth}
                firstItem={0}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                useScrollView={true}
                lockScrollTimeoutDuration={2000}
                autoplay={true}
                loop={true}
                autoplayDelay={1000}
                autoplayInterval={3000}
              
            />
       */}
        </View>
    )
}


export default SliderCarousel;