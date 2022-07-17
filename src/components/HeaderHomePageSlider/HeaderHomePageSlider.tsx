
import React from 'react';
import { View, Text, Image } from 'react-native';
import {
    ScrollView, Card, Button, Icon
} from '../../atoms';
import { MaterialIcons } from '../../atoms/Icon/type';
import { styles } from './style';
import { IHeaderHomePageSlider } from './HeaderHomePageSlider.type';



const HeaderHomePageSlider = ({ data, onPressTitle }: IHeaderHomePageSlider) => {

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginEnd: 10, marginTop: 10 }}>
            {data.map((item: any) => {
                return (<Card onPress={onPressTitle} >
                    <View style={styles.container} key={item._id}>
                        <View style={styles.description} >
                            <Text style={styles.txtTop}>{item.description}</Text>
                            <Text style={styles.txtBottom}>{item.title}</Text>
                            <Button title={'کلیک کن'} styleButton={styles.button} styleText={styles.txtButton} >
                                < Icon type={MaterialIcons} name={'arrow-back-ios'} size={14} color={'#fff'} />
                            </Button>
                        </View>
                        <Image style={styles.image} source={require('../../assets/imageSlider.png')} />
                    </View>
                </Card>)
            })}
        </ScrollView>
    );
};
export default HeaderHomePageSlider;







