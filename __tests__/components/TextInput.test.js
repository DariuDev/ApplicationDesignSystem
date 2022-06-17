
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from '../../App/index';
 
it('test textInput', () => {
   const {getByPlaceholderText} = render(<App />)
   getByPlaceholderText('type here')
});
it ('should change input', () => {
   const {getByTestId} = render(<App />)
   const input = getByTestId('text-input');
   fireEvent.changeText(input, 'dariush');
   expect(input.props.value).toBe('dariush'); 
});
