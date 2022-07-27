import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HeaderHomePageSlider from '..';

const data1 = [
  {
    title: 'Hats',
    description:''
  },
  {
    title: 'book',
  },
  {
    title: 'Tshirt',
    description:''
  },
  
];
describe('organisms => HeaderHomePageSlider', () => {
  const onPressMock = jest.fn();
  const eventData = {
    nativeEvent: {
      pageX: 20,
      pageY: 30,
    },
  };
  it('test HeaderHomePageSlider', () => {
    const screen = render(
      <HeaderHomePageSlider
        dataCrouser={data1}
        onPress={onPressMock}
      />
    );

    expect(screen.getByTestId('cardHeaderHomeSlider-0')).toHaveTextContent('Hats');
    expect(screen.getByTestId('cardHeaderHomeSlider-1')).toHaveTextContent('book');

    fireEvent.press(screen.getByTestId('cardHeaderHomeSlider-0'), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);
    fireEvent.press(screen.getByTestId('cardHeaderHomeSlider-1'), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);

    
    
  });
});
