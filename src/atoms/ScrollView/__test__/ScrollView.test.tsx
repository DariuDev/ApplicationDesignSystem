import React from 'react';
import {Text, View} from 'react-native';
import {render, fireEvent} from '@testing-library/react-native';
import ScrollView from '../index';

describe('atoms => ScrollView', () => {
  const onScrollMock = jest.fn();
  const eventData = {
    nativeEvent: {
      contentOffset: {
        y: 200,
      },
    },
  };
  it('test scrollView', () => {
    const screen = render(
     <ScrollView testID={'scrollview-id'} onScroll={onScrollMock}>
        <Text>Dariush</Text>
      </ScrollView>
    );
    const scrollView = screen.getByTestId('scrollview-id');
   
    expect(scrollView).toHaveTextContent( 'Dariush' );

    fireEvent.scroll(scrollView, eventData);
  });
});
