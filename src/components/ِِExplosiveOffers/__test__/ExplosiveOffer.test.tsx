import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ExplosiveOffers from '..';

const dataSlider = [
  {title: '1عینک طبی'},
  {
    title: 'عینک آفتابی',
  },
  {title: '2عینک طبی'},
];
const eventData = {
  nativeEvent: {
    contentOffset: {
      y: 200,
    },
  },
};
describe('components => ExplosiveOffers', () => {
  it('test ExplosiveOffers', () => {
    const screen = render(<ExplosiveOffers data={dataSlider} />);
    expect(screen.getByTestId('ExplosiveOffer-0')).toHaveTextContent(
      '1عینک طبی',
    );
    expect(screen.getByTestId('ExplosiveOffer-1')).toHaveTextContent(
      'عینک آفتابی',
    );
    expect(screen.getByTestId('ExplosiveOffer-2')).toHaveTextContent(
      '2عینک طبی',
    );
    fireEvent.scroll(screen.getByTestId('scrollView-id'), eventData);

    expect(screen.getByTestId('explosiveText-id')).toHaveTextContent('انفجاری');
    expect(screen.getByTestId('offText-id')).toHaveTextContent('تخفیف ها');
  });
});
