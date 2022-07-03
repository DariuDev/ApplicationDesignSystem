import React from 'react';
import CheckBox from '../CheckBox';
import { fireEvent, render, wait } from '@testing-library/react-native';

describe('CheckBox', () => {
    jest.mock(
        'react-native-vector-icons/MaterialIcons',
        () => 'MaterialIcons',
    );
    it('shows checkBox', async () => {
        const screen = render(<CheckBox title='emel' size={10} />);
        expect(screen.getByTestId('checkBox-test')).toBeEnabled();
        expect(screen.queryByTestId('checkBox-test')).toContainElement(screen.queryByTestId('checkBox-text-test'));
        expect(screen.getByTestId('checkBox-text-test')).toHaveTextContent('emel');
        // expect(screen.getByTestId('checkBox-icon-test')).toHaveProp('size');
    });

    it('shows the tickIcon when the checkBox checked',  () => {
        const checked = false;
        const screen = render(
            <CheckBox isChecked={checked} title='music' />
        );
         fireEvent.press(screen.getByTestId('checkBox-test'));
        expect(screen.getByTestId('checkBox-test')).toBeTruthy();


    });

});


