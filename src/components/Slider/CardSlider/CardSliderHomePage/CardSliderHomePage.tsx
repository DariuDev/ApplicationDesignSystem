import React from 'react';
import { Text, View, Image, StyleProp } from 'react-native';
import { Button } from '../../../../atoms';
import styles from './style';
// interface PropType{
//     item:{

//     title: string;
//     description: string;
//     };
//  }
interface PropType {

    title: string;
    description: string;
    // number:number;
    // image:string;

}
const CardSliderResultLastAnalys: React.FC<PropType> = ({ description, title }) => {
    return (

        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Image style={{width:50,height:50,resizeMode:'contain'}} source={require('../../../../assets/imageSlider.png')}/>
                <View>
                     <Text style={styles.description}>{description}</Text>
                <Text style={styles.title}>{title}</Text>
                <Button title={'کلیک کن'} backgroundColor='red' />
                </View>
               
            </View>

        </View>

    )
}
export default CardSliderResultLastAnalys;