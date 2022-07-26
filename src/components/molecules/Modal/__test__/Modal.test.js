import React from 'react';
import { Text } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import ModalC from '../ModalC';

describe('components >> Modal ', () => {
    it('Show Modal', () => {
        const handleClose = jest.fn()
        const screen = render(<ModalC
            testId='modal-test'
            open={true}
            onClose={handleClose}
            style={{ backgroundColor: 'black' }}>
            <Text>welcome emel :)</Text>
        </ModalC>);
        expect(screen.getByTestId('modal-test')).toHaveProp('testID', 'modal-test');
        expect(screen.getByTestId('modal-test')).toBeEnabled();
        expect(screen.getByTestId('modal-test')).toHaveTextContent('welcome emel :)');
        expect(screen.getByTestId('modal-test')).toHaveStyle({ backgroundColor: 'black' });
        fireEvent.press(screen.getByTestId('modal-test'));
        expect(handleClose).toHaveBeenCalled;
    });
});







