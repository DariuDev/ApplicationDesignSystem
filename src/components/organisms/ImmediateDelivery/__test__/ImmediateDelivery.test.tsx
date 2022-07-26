import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ImmediateDelivery from '..';

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
];
describe('organisms => ImmediateDelivery', () => {
  const onPressMock = jest.fn();
  const eventData = {
    nativeEvent: {
      pageX: 20,
      pageY: 30,
    },
  };
  it('test ImmediateDelivery', () => {
    const screen = render(
      <ImmediateDelivery
        data={data1}
        showAll={onPressMock}
        onPressTitle={onPressMock}
      />,
    );
    expect(screen.getByTestId('offerCard-0')).toHaveTextContent('4,200,000');
    expect(screen.getByTestId('offerCard-1')).toHaveTextContent('4,200,000');
    expect(screen.getByTestId('offerCard-2')).toHaveTextContent('4,200,000');

    fireEvent.press(screen.getByTestId('offerCard-0'), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);
   
    fireEvent.press(screen.getByTestId('showAllText-id'), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);
  });
});
