import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, Button, Icon } from '../../atoms';
import { MaterialIcons } from '../../atoms/Icon/type';
import { styles } from './style';
import type { IHeaderHomePageSlider } from './HeaderHomePageSlider.type';
// import  Slider  from '../CarouselSlider';


const HeaderHomePageSlider = ({ dataCrouser, onPress }: IHeaderHomePageSlider) => {
  return (
    <View/>
    // <Slider
    //   data={dataCrouser}
    //   renderItem={({ item, index }: any) => (
    //     <Card
    //       onPress={onPress}
    //       key={index}>
    //       <View style={styles.container} >
    //         <View style={styles.description}>
    //           <Text style={styles.txtTop}>{item.description}</Text>
    //           <Text style={styles.txtBottom}>{item.title}</Text>
    //           <Button
    //             title={'کلیک کن'}
    //             styleButton={styles.button}
    //             styleText={styles.txtButton}>
    //             <Icon
    //               type={MaterialIcons}
    //               name={'arrow-back-ios'}
    //               size={14}
    //               color={'#fff'}
    //             />
    //           </Button>
    //         </View>
    //         <Image
    //           style={styles.image}
    //           source={require('../../assets/imageSlider.png')}
    //         />
    //       </View>
    //     </Card>
    //   )}

    // />
  );
};
export default HeaderHomePageSlider;
