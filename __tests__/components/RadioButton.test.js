import React from "react";
import { fireEvent, render } from '@testing-library/react-native';
import App from '../../App/index';


describe('RadioButton', () => {

    it('should check radiobottun truthy', () => {
        const { getByTestId } = render(<App />);
        const findRadioButton = getByTestId('radio-button');
        fireEvent.press(findRadioButton);
        expect(findRadioButton).toBeTruthy();
    });
});
