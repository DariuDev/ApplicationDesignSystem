import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TopBrand from '..';

const data1 = [
    {
        image: ''
    },
    {
        image: ''
    },
    {
        image: ''
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
            <TopBrand
                data1={data1}
                data2={data1}
                data3={data1}
                onPressItem1={onPressMock}
            />
        );
        
        expect(screen.getByTestId('topBrand-id')).toHaveTextContent('برندهای برتر');



    });
});
