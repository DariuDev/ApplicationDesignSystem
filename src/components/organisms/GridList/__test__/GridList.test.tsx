import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import GridList from '../GridList';

describe('organisms => GridList', () => {
  const onPressMock = jest.fn();
  const eventData = {
    nativeEvent: {
      pageX: 20,
      pageY: 30,
    },
  };
  const data1 = [
    {
      image: '',
    },
    {
      image: '',
    },
    {
      image: '',
    },
    {
      image: '',
    },
  ];
  it('test GridList', () => {
    const screen = render(
      <GridList data={data1} onPressItem={onPressMock} />
    );
  
    expect(screen.getByTestId('cardGridList-id-0')).toHaveProp('style');
    expect(screen.getByTestId('cardGridList-id-1')).toHaveProp('style');

    fireEvent.press(screen.getByTestId('cardGridList-id-0'), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);
    fireEvent.press(screen.getByTestId('cardGridList-id-1'), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);

  });
});
