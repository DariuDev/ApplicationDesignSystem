import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Badge from '../Badge';
import { Text } from 'react-native';



describe('components >> Badge ', () => {
    it('Show Badge', () => {
        // expect.assertions(6);
        const onPress = jest.fn(console.log('onpress badge'));
        const screen = render(<Badge
            testId='badge-test'
            onPress={onPress}
            visibale={true}
            styleBadge={{ ackgroundColor: 'red' }}
        >
            <Text >hi emel :)</Text>
        </Badge>);

        expect(screen.getByTestId('badge-test')).toHaveProp('testID', 'badge-test');
        expect(screen.getByTestId('badge-test')).toBeEnabled();
        expect(screen.getByTestId('badge-test')).toHaveTextContent('hi emel :)');
        expect(screen.getByTestId('badge-test')).toHaveStyle({ ackgroundColor: 'red' });
        expect(onPress).toHaveBeenCalledTimes(0);
        fireEvent.press(screen.getByTestId('badge-test'));
        expect(onPress).toHaveBeenCalledTimes(1);
    });
});