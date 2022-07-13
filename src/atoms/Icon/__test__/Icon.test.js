import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Icon from '../Icon';




describe('components >> Icon ', () => {
    it('Show Icon', () => {
        const onPress = jest.fn();
        const screen = render(<Icon
            // testID='icon-test'
            onPress={onPress}
            style={{ ackgroundColor: 'red' }}
            type={'AntDesign'}
        />
            );

        expect(screen.getByTestId('Icon-test')).toHaveProp('testID', 'Icon-test');
        // expect(screen.getByTestId('Icon-test')).toBeEnabled();
        // expect(screen.getByTestId('Icon-test')).toHaveStyle({ ackgroundColor: 'red' });
        //  expect(screen.getByTestId('icon-test')).toHaveProp('type', 'AntDesign');

        // expect(onPress).toHaveBeenCalledTimes(0);
        // fireEvent.press(screen.getByTestId('Icon-test'));
        // expect(onPress).toHaveBeenCalledTimes(1);
    });
});