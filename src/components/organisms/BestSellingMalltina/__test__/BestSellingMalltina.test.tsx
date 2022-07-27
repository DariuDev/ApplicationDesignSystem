import React from 'react';
import {render,fireEvent} from '@testing-library/react-native';
import BestSellingMalltina from '../BestSellingMalltina';

const data = [
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
        data={data}
        showAll={onPressMock}
        onPressItem={onPressMock}
      />,
    );
    expect(screen.getByTestId('bestSellingText-id')).toHaveTextContent('فروش های مالتی');

    fireEvent.press(screen.getByTestId('showAllText-id'), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);

    fireEvent.press(screen.getByTestId('offerCard-id'), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);
  });
});
