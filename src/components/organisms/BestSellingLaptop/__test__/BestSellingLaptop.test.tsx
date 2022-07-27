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
  const eventData = ()=>console.log('emel');
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

    
    // expect(screen.getByTestId('layoutBestLaptop-id').children.length).toBe(3);

    fireEvent.press(screen.getByTestId('showAllBestLaptop-id'), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);
  });
});
