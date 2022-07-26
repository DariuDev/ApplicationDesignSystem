import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import AccessoriesOrnaments from '..';

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
describe('organisms => AccessoriesOrnaments', () => {
  const onPressMock = jest.fn();
  const eventData = {
    nativeEvent: {
      pageX: 20,
      pageY: 30,
    },
  };
  it('test AccessoriesOrnaments', () => {
    const screen = render(
      <AccessoriesOrnaments
        data={data1}
        showAll={onPressMock}
        onPressItem={onPressMock}
      />,
    );
    expect(screen.getByTestId('offerCardAccessories0')).toHaveTextContent('4,200,000');
    expect(screen.getByTestId('offerCardAccessories1')).toHaveTextContent('4,200,000');
    expect(screen.getByTestId('offerCardAccessories2')).toHaveTextContent('4,200,000');

    fireEvent.press(screen.getByTestId('offerCardAccessories0'), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);
   
    fireEvent.press(screen.getByTestId('showAllTextAccessories-id'), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);
  });
});
