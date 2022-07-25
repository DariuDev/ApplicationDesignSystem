import React from 'react'
import { ListRenderItem, View } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import  { SLIDER_WIDTH, ITEM_WIDTH } from './SliderCardItem'


interface Islider {
  IsPagination?: boolean;
  dotStylePagination?: {};
  data: object[];
  renderItem: ListRenderItem<object>
}


const CarouselCards = <T extends Record<any, any>> ({ IsPagination, dotStylePagination, data, renderItem,otherProps }: Islider & T) => {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0)
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        layout="default"
        // layoutCardOffset={5}
        ref={isCarousel}
        data={data}
        // renderItem={renderItem} for component Slider use
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        // containerCustomStyle={{ marginHorizontal: 10 }}
         slideStyle={{ marginRight:10 }}

        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        //  inactiveSlideShift={1}
        useScrollView={true}
        // onSnapToItem={(index) => setIndex(index)}
        lockScrollTimeoutDuration={2000}
        // lockScrollWhileSnapping={true}
        autoplay={true}
        loop={true}
        autoplayDelay={1000}
        autoplayInterval={3000} 
        {...otherProps}
      />
      {/* {IsPagination && <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)',
          ...dotStylePagination
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />}    */}
    </View>
  )
}


export default CarouselCards;