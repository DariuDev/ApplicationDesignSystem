import React from 'react';
import {render} from '@testing-library/react-native';
import RadioButton from '..';

const radioButtonMock = [
    {value: '1', title: 'data 1'},
    {value: '2', title: 'data 2'},
]

describe('components => RadioButton', () => {
  it('=> render radiobutton', () => {
    const screen = render(<RadioButton data={radioButtonMock} />);
    
    expect(screen.getByTestId('radioButton-0')).toHaveTextContent('1');
    expect(screen.getByTestId('radioButton-1')).toHaveTextContent('2');
  });
});
