import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style';
interface PropType{
    item:{
        title:string;
        number:number;
        image:string;
    };
 }
const CardSliderResultLastAnalys:React.FC<PropType> = ({ item}) => {
    return (

        <View style={styles.cardItemLastAnalys}>
          
                    <>
                        <View style={styles.viewTopRowLastAnalys}>
                            {/* <View style={styles.cardImageLastAnalys}>
                                <Image
                                    // source={image}
                                    source={{ uri:item.image }}
                                    style={styles.imageLastAnalys}
                                />
                            </View> */}
                            <View style={styles.viewCircleLastAnalys}>
                                <Text style={styles.txtnumberLastAnalys} >{Math.floor(item.number)}</Text>
                            </View>
                        </View>
                        <View style={styles.cardTitleLastAnalys}>
                            <Text style={styles.titleLastAnalys}>{item.title}</Text>
                        </View>
                    </>
        </View>

    )
}
export default CardSliderResultLastAnalys;