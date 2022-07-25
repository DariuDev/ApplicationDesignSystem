import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ProductCard from '../ProductCard';

describe('moldecules >> productCard', () => {
  const onPressMock = jest.fn();
  const eventData = {
    nativeEvent: {
      pageX: 20,
      pageY: 30,
    },
  };
  it('test ProductCard', () => {
    const screen = render(
      <ProductCard
        onPress={onPressMock}
        productImage={'image'}
        title={'Dariush'}
        price={'22,000'}
        off={'15,000'}
        mainPrice={'30,000'}
        style={{alignItems: 'center'}}
      />,
    );
    expect(screen.getByTestId('productCard-id')).toHaveProp(
      'testID',
      'productCard-id',
    );
    expect(screen.getByTestId('productCard-id')).toHaveStyle({alignItems: 'center'});
    expect(screen.getByTestId('productImage-id')).toHaveTextContent('image');
    expect(screen.getByTestId('productTitle-id')).toHaveTextContent('Dariush');
    expect(screen.getByTestId('productOff-id')).toHaveTextContent('15,000');
    expect(screen.getByTestId('productPrice-id')).toHaveTextContent('22,000');
    expect(screen.getByTestId('productMainPrice-id')).toHaveTextContent('30,000');

    fireEvent.press(screen.getByTestId('productCard-id'), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);
  });
});
