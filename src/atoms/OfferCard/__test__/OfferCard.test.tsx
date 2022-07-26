import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import OfferCard from '../OfferCard';

describe('moldecules >> OfferCard', () => {
  const onPressMock = jest.fn();
  const eventData = {
    nativeEvent: {
      pageX: 20,
      pageY: 30,
    },
  };
  it('test OfferCard', () => {
    const screen = render(
      <OfferCard
        onPress={onPressMock}
        OfferImage={'image'}
        title={'Dariush'}
        price={'22,000'}
        off={'15,000'}
        mainPrice={'30,000'}
        style={{alignItems: 'center'}}
      />,
    );
    expect(screen.getByTestId('OfferCard-id')).toHaveProp(
      'testID',
      'OfferCard-id',
    );
    expect(screen.getByTestId('OfferCard-id')).toHaveStyle({alignItems: 'center'});
    expect(screen.getByTestId('OfferImage-id')).toHaveTextContent('image');
    expect(screen.getByTestId('OfferTitle-id')).toHaveTextContent('Dariush');
    expect(screen.getByTestId('OfferOff-id')).toHaveTextContent('15,000');
    expect(screen.getByTestId('OfferPrice-id')).toHaveTextContent('22,000');
    expect(screen.getByTestId('OfferMainPrice-id')).toHaveTextContent('30,000');
   
    fireEvent.press(screen.getByTestId('OfferCard-id'), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);
  });
});
