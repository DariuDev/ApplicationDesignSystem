import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CapHats from '..';

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
describe('organisms => CapHats', () => {
  const onPressMock = jest.fn();
  const eventData = {
    nativeEvent: {
      pageX: 20,
      pageY: 30,
    },
  };
  it('test CapHats', () => {
    const screen = render(
      <CapHats
        data={data1}
        showAll={onPressMock}
        onPressItem={onPressMock}
      />
    );
    expect(screen.getByTestId('offerCardHats-0')).toHaveTextContent('4,200,000');
    expect(screen.getByTestId('offerCardHats-1')).toHaveTextContent('4,200,000');

    fireEvent.press(screen.getByTestId('offerCardHats-0'), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);
    fireEvent.press(screen.getByTestId('offerCardHats-1'), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);

    expect(screen.getByTestId('HatsText-id')).toHaveTextContent('کلاه های کپ')
    expect(screen.getByTestId('showAllHatsText-id')).toHaveTextContent('مایش ه');

    fireEvent.press(screen.getByTestId('showAllHatsText-id'), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);
    
  });
});
