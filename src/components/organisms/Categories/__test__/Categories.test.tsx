import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Categories from '..';

const data1 = [
  {
    title: 'emel1',
  },
  {
    title: 'emel2',
  },
  {
    title: 'emel3',
  },
  {
    title: 'emel4',
  },
  {
    title: 'emel5',
  },
  {
    title: 'emel6',
  },
  {
    title: 'emel7',
  },
  {
    title: 'emel8',
  },
  {
    title: 'emel9',
  },
];
describe('organisms => Categories', () => {
  const onPressMock = jest.fn();
  const eventData = {
    nativeEvent: {
      pageX: 20,
      pageY: 30,
    },
  };
  it('test Categories', () => {
    const screen = render(
      <Categories
        data={data1}
        onPressItem={onPressMock}
      />
    );

    expect(screen.getByTestId('cardCategories-0')).toHaveTextContent('emel1');
    expect(screen.getByTestId('cardCategories-1')).toHaveTextContent('emel2');

    fireEvent.press(screen.getByTestId('cardCategories-0'), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);
    fireEvent.press(screen.getByTestId('cardCategories-1'), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);

    expect(screen.getByTestId('categoriesText-id')).toHaveTextContent('دسته بندیها')
  
    
  });
});
