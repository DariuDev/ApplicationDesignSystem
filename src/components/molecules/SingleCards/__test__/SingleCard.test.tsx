import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Card from '..';

describe('atoms => SingleCard', () => {
  it('test SingleCard', () => {
    const onPressMock = jest.fn();
    const eventDataOnPress = {
      nativeEvent: {
        pageX: 20,
        pageY: 30,
      },
    };
    const screen = render(<Card title={'Dariush'} onPressCard={onPressMock} />);

    expect(screen.getByTestId('title-id')).toHaveTextContent('Dariush');
    expect(screen.getByTestId('button-id')).toHaveTextContent('مشاهده');

    fireEvent.press(screen.getByTestId('button-id'), eventDataOnPress);
    expect(onPressMock).toHaveBeenCalledWith(eventDataOnPress);

  });
});
