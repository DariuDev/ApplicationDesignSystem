import React from 'react';
import {render} from '@testing-library/react-native';
import ExplosiveOfferCard from '../ExplosiveOfferCard';

describe('components > Card', () => {
  it('test card', () => {
    const screen = render(
      <ExplosiveOfferCard
        titleImage="titleImage"
        mainPrice="mainPrice"
        price="price"
        timer="timer"
        title="title"
        off="off"
      />,
    );
    expect(screen.getByTestId('titleImage-id')).toHaveTextContent('titleImage');
    expect(screen.getByTestId('mainPrice-id')).toHaveTextContent('mainPrice');
    expect(screen.getByTestId('price-id')).toHaveTextContent('price');
    expect(screen.getByTestId('timer-id')).toHaveTextContent('timer');
    expect(screen.getByTestId('titleImage-id')).toHaveTextContent('titleImage');
    expect(screen.getByTestId('off-id')).toHaveTextContent('offc');
  });
});
