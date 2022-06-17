import React from 'react';
import CheckBox from '../CheckBox';
import { fireEvent, render, wait } from '@testing-library/react-native';


describe('CheckBox', () => {
    jest.mock(
        'react-native-vector-icons/MaterialIcons',
        () => 'MaterialIcons',
    );
    
    const activeCheckBox = render(<CheckBox title='music'  />);
    
    it('renders correctly', () => {
        const activeCheckBoxAsJson = activeCheckBox.toJSON();
        expect(activeCheckBoxAsJson).toMatchSnapshot();
    });
  


    it('shows the tickIcon when the checkBox checked', () => {
        const checked = false;
        const { getByTestId } = render(
            <CheckBox isChecked={checked} title='music' />
        );
        const checkBoxById = getByTestId('custtomCheckBox');
        // expect(checkBoxById).toBeDefined();
        fireEvent.press(checkBoxById);
        expect(checkBoxById).toBeTruthy();
       

    });

});


