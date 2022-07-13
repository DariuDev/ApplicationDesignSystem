import React from 'react';
import { Text } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import ModalC from '../ModalC';


describe('components >> Modal ', () => {
    it('Show Modal', () => {
        const handleClose = jest.fn()
        // expect.assertions(6);

        const screen = render(<ModalC
            testId='modal-test'
            open={true}
            onClose={handleClose}
            style={{ backgroundColor: 'black' }}
        ><Text>welcome emel :)</Text></ModalC>);

        expect(screen.getByTestId('modal-test')).toHaveProp('testID', 'modal-test');
        // expect(screen.getByTestId('close-icon-modal-test')).toHaveProp("onPress", handleClose);
        expect(screen.getByTestId('modal-test')).toBeEnabled();
        expect(screen.getByTestId('modal-test')).toHaveTextContent('welcome emel :)');

        //expect(screen.queryByTestId('modal-test')).toContainElement(screen.queryByTestId('close-icon-modal-test'));

        expect(screen.getByTestId('modal-test')).toHaveStyle({ backgroundColor: 'black' });
        expect(screen.getByTestId('modal-test'))
       
       // expect(handleClose).toHaveBeenCalledTimes(0);
         fireEvent.press(screen.getByTestId('modal-test'));
         expect(handleClose).toHaveBeenCalled;
        // fireEvent.press(screen.getByTestId('close-icon-modal-test'),handleClose);
        //  expect(handleClose).toHaveBeenCalledWith(handleClose)
    });
});







