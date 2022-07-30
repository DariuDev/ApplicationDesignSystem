import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Header from '..';
describe('organisms => Header', () => {
  it('test Header', () => {
    const onPressMock = jest.fn();
  const eventData = {
    nativeEvent: {
      pageX: 20,
      pageY: 30,
    },
  };
    const screen = render(
      <Header
        onPress={onPressMock}
        height={85}
        backgroundColor="#061d72"
      />,
    );
    expect(screen.getByTestId('header-id')).toHaveStyle({height: 85});
    expect(screen.getByTestId('header-id')).toHaveStyle({
      backgroundColor: '#061d72',
    });
    fireEvent.press(screen.getByTestId('searchOnPress-id'), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);
  });
});
