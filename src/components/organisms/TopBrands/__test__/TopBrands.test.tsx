import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TopBrands from '..';

const data1 = [
    {
        image: 'emel1'
    },
    {
        image: 'emel2'
    },
    {
        image: 'emel3'
    },
];
describe('organisms => TopBrand', () => {
    const onPressMock = jest.fn();
    const eventData = {
        nativeEvent: {
            pageX: 20,
            pageY: 30,
        },
    };
    it('test TopBrand', () => {
        const screen = render(
            <TopBrands
                data1={data1}
                data2={data1}
                data3={data1}
                onPressItem1={onPressMock}
                onPressItem2={onPressMock}
                onPressItem3={onPressMock}
            />
        );

        expect(screen.getByTestId('topBrandText-id')).toHaveTextContent('برندهای برتر');

        fireEvent.press(screen.getByTestId('cardBrand1-id0'), eventData);
        expect(onPressMock).toHaveBeenCalledWith(eventData);

        // fireEvent.press(screen.getByTestId('cardBrand2-id0'), eventData);
        // expect(onPressMock).toHaveBeenCalledWith(eventData);

        // fireEvent.press(screen.getByTestId('cardBrand3-id0'), eventData);
        // expect(onPressMock).toHaveBeenCalledWith(eventData);

    });
});
