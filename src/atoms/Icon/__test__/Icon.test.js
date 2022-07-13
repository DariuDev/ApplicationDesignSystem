import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Icon from '../Icon';




describe('components >> Icon ', () => {
  
    it('Show Icon', () => {
        const onPress = jest.fn();

        const screen = render(<Icon
            onPress={onPress}
            name={'local-fire-department'}
            style={{ ackgroundColor: 'red' }}
            type={"MaterialIcons"}
        />
        );

        expect(screen.getByTestId('icon-test')).toHaveProp('testID', 'icon-test');
        expect(screen.getByTestId('icon-test')).toHaveStyle({ ackgroundColor: 'red' });
        expect(screen.getByTestId('icon-test')).toHaveProp('name', 'local-fire-department');
      
        expect(onPress).toHaveBeenCalledTimes(0);
        fireEvent.press(screen.getByTestId('icon-test'));
        expect(onPress).toHaveBeenCalledTimes(1);
    });
});