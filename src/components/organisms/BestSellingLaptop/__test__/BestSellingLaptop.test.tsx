import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BestSellingLaptop from '..';

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
describe('organisms => BestSellingLaptop', () => {
  const onPressMock = jest.fn();
  const eventData = {
    nativeEvent: {
      pageX: 20,
      pageY: 30,
    },
  };
  it('test BestSellingLaptop', () => {
    const screen = render(
      <BestSellingLaptop
        data={data1}
        showAll={onPressMock}
        onPressItem={onPressMock}
      />
    );
    expect(screen.getByTestId('offerCardBestLaptop-0')).toHaveTextContent('4,200,000');
    expect(screen.getByTestId('offerCardBestLaptop-1')).toHaveTextContent('4,200,000');

    fireEvent.press(screen.getByTestId('offerCardBestLaptop-0'), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);
    fireEvent.press(screen.getByTestId('offerCardBestLaptop-1'), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);

    expect(screen.getByTestId('bestSellingText-id')).toHaveTextContent('ترین لپ تاب های آمازو')
    expect(screen.getByTestId('showAllBestLaptopText-id')).toHaveTextContent('مایش ه');

    fireEvent.press(screen.getByTestId('showAllBestLaptopText-id'), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);
    
  });
});
