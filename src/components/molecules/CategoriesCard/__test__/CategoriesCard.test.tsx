import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CategoriesCard from '../CategoriesCard';

describe('moldecules >> CategoriesCard', () => {
    const onPressMock = jest.fn();
    const eventData = {
        nativeEvent: {
            pageX: 20,
            pageY: 30,
        },
    };
    it('test CategoriesCard', () => {
        const screen = render(
            <CategoriesCard
                onPress={onPressMock}
                image={'image'}
                title={'emel'}
                style={{ alignItems: 'center' }}
            />,
        );
        expect(screen.getByTestId('categoriesCard-id')).toHaveProp(
            'testID',
            'categoriesCard-id',
        );
        expect(screen.getByTestId('categoriesCard-id')).toHaveStyle({
            alignItems: 'center',
        });
        // expect(screen.getByTestId('categoriesCardImage-id')).toHaveTextContent('image');
        expect(screen.getByTestId('categoriesCardText-id')).toHaveTextContent('emel');

        fireEvent.press(screen.getByTestId('categoriesCard-id'), eventData);
        expect(onPressMock).toHaveBeenCalledWith(eventData);
    });
});
