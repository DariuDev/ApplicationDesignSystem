import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import TextInput from '..';

describe('components =>  TextInput', () => {
  it('test textInput', async () => {
    const screen = render(
      <TextInput
        placeholder={'type here'}
        testID={'test'}
      />,
    );
    expect(screen.getByTestId('test')).toHaveProp('placeholder', 'type here');
  });
});
