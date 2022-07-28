import React from 'react';
import { styles } from './style';
import { Card, Text } from '../../atoms';
import type { IBrandCard } from './BrandCard.type';

const BrandCard = <T extends Record<any, unknown>>({
    image, onpress, testID = 'cardBrand-id', ...otherProps }: IBrandCard & T) => {
    return (
        <Card testID={testID} style={styles.card} onPress={onpress} {...otherProps}>
            <Text>{image}</Text>
        </Card>
    );
};
export default BrandCard;