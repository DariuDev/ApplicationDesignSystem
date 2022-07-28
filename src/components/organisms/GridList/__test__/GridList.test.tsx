import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
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
      title: 'mens dust protection sport hoodie tops',
      price: '4,200,000',
      off: '15',
      mainPrice: '22,000,000',
    },
    {
      image: '',
      title: 'mens dust protection sport hoodie tops',
      price: '4,200,000',
      mainPrice: '22,000,000',
    },
    {
      image: '',
      title: 'mens dust protection sport hoodie tops',
      price: '4,200,000',
      off: '15',
      mainPrice: '22,000,000',
    },
    {
      image: '',
      title: 'mens dust protection sport hoodie tops',
      price: '4,200,000',
      off: '15',
      mainPrice: '22,000,000',
    },
  ];
  it('test GridList', () => {
    const screen = render(<GridList data={data1} onPressItem={onPressMock} />);

    // expect(screen.getByTestId('layout-id')).toHaveTextContent('4,200,000');

    // fireEvent.press(screen.getByTestId('layout-id'), eventData);
    // expect(onPressMock).toHaveBeenCalledWith(eventData);
  });
});
