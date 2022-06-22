import React, {useState} from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import TextInput from '..';

const Example = () => {
  const [value, setValue] = useState('');
  return (
    <TextInput
      placeholder={'type here'}
      testID={'test'}
      value={value}
      onChangeText={setValue}
    />
  );
};

describe('components =>  TextInput', () => {
  it('test textInput', async () => {
    expect.assertions(4);
    const screen = render(<Example />);
    const input = screen.getByTestId('test');
    expect(input).toHaveProp('placeholder', 'type here');
    expect(input).toHaveProp('testID', 'test');

    fireEvent.changeText(input, 'dariush');
    expect(input.props.value).toBe('dariush');

    fireEvent.changeText(input, 'soqra');
    expect(input.props.value).toBe('soqra');
  });
});
