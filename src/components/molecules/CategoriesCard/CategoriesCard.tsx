import React from 'react';
import { View } from 'react-native';
import { styles } from './style';
import type { ICategoriesCard } from './CategoriesCard.type';
import { Card, Text } from '../../atoms';

const CategoriesCard = <T extends Record<any, unknown>>({
    onPress,
    image,
    title,
    testID = 'categoriesCard-id',
    ...otherProps
}: ICategoriesCard & T) => (
    <Card style={styles.cardItem} onPress={onPress} testID={testID} {...otherProps}>
        <View>
            <View style={styles.viewImage}>
                <Text testID='categoriesCardImage-id'>{image}</Text>
            </View>
            <Text testID='categoriesCardText-id' color={'gray'} fontSize={15} fontWeight={'bold'}>
                {title}
            </Text>
        </View>
    </Card>

);
export default CategoriesCard;
