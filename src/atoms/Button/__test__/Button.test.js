import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../Button';


describe('components >> Button ', () => {
  it('Show Button', () => {
    // expect.assertions(6);
      const onPress=jest.fn();
    const screen = render(<Button
      testId='button-test'
      title='click here'
     onPress={onPress}
      styleButton={{ ackgroundColor: 'red' }}
    />);

    expect(screen.getByTestId('button-test')).toHaveProp('testID', 'button-test');
    expect(screen.getByTestId('button-test')).toBeEnabled();
    expect(screen.queryByTestId('button-test')).toContainElement(screen.queryByTestId('button-text-test'));
    expect(screen.getByTestId('button-text-test')).toHaveTextContent('click here');
    expect(screen.getByTestId('button-test')).toHaveStyle({ ackgroundColor: 'red' });
    expect(onPress).toHaveBeenCalledTimes(0);
     fireEvent.press(screen.getByTestId('button-test'));
     expect(onPress).toHaveBeenCalledTimes(1);
  });
});







