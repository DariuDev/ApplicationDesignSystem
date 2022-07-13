import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Layout from '../Layout';


describe('components => Flatlist', () => { 
  const eventData = [
    {_id: '1', description: 'تابستون امسال با بهترین های', title: 'عینک طبی'} ];
  it('test Flatlist', () => {
    const screen = render(
      <FlatList
        testID="flatlist-ID"
        onScroll={handleScroll}
        data={eventData}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />,
    );
    const Flatlist = screen.getByTestId('flatlist-ID');
    expect(FlatList).toHaveBeenCalled
    expect(Flatlist).toHaveProp('testID', 'flatlist-ID');
    expect(Flatlist).toHaveProp('data', eventData);
    fireEvent.scroll(Flatlist, {
      nativeEvent: {
          contentSize: { height: 600, width: 400 },
          contentOffset: { y: 150, x: 0 },
          layoutMeasurement: { height: 100, width: 100 }
      }
  })
  });
});
