import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BrandCard from '../BrandCard';

describe('moldecules >> BrandCard', () => {
    const onPressMock = jest.fn();
    const eventData = {
        nativeEvent: {
            pageX: 20,
            pageY: 30,
        },
    };
    it('test BrandCard', () => {
        const screen = render(
            <BrandCard
                onpress={onPressMock}
                image={'image'}
                style={{ alignItems: 'center' }}
            />,
        );
        expect(screen.getByTestId('cardBrand-id')).toHaveProp(
            'testID',
            'cardBrand-id',
        );
        expect(screen.getByTestId('cardBrand-id')).toHaveStyle({
            alignItems: 'center',
        });

        fireEvent.press(screen.getByTestId('cardBrand-id'), eventData);
        expect(onPressMock).toHaveBeenCalledWith(eventData);
    });
});
