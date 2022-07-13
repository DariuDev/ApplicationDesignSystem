import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Icon from '../Icon';
import { AntDesign } from '../type';

describe('components >> Icon ', () => {
    it('Show Icon', () => {
        const onPress = jest.fn();
        const screen = render(<Icon
            testID='icon-test'
            onPress={onPress}
            type={AntDesign}
            name={'like1'}
            style={{ backgroundColor: 'red' }}
        />
        );
        expect(screen.getByTestId('icon-test')).toHaveProp('testID', 'icon-test');
        expect(screen.getByTestId('icon-test')).toHaveStyle({ backgroundColor: 'red' });
        expect(onPress).toHaveBeenCalledTimes(0);
        fireEvent.press(screen.getByTestId('icon-test'));
        expect(onPress).toHaveBeenCalledTimes(1);
    });
});