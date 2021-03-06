import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BestSellingMalltina from '..';

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
    price: '4,200,000',
  },
  {
    price: '4,200,000',
  },
];
describe('organisms => BestSellingMalltina', () => {
  const onPressMock = jest.fn();
  const eventData = {
    nativeEvent: {
      pageX: 20,
      pageY: 30,
    },
  };
  it('test BestSellingMalltina', () => {
    const screen = render(
      <BestSellingMalltina
        data={data1}
        showAll={onPressMock}
        onPressItem={onPressMock}
      />
    );
    expect(screen.getByTestId('offerCardBestMalltina-0')).toHaveTextContent('4,200,000');
    expect(screen.getByTestId('offerCardBestMalltina-1')).toHaveTextContent('4,200,000');

    fireEvent.press(screen.getByTestId('offerCardBestMalltina-0'), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);
    fireEvent.press(screen.getByTestId('offerCardBestMalltina-1'), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);

    expect(screen.getByTestId('bestMalltinaText-id')).toHaveTextContent('پرفروش های مالتینا')
    expect(screen.getByTestId('showAllMalltinaText-id')).toHaveTextContent('مایش ه');

    fireEvent.press(screen.getByTestId('showAllMalltinaText-id'), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);
    
  });
});
