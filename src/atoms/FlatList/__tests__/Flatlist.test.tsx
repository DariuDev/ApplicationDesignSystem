import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import FlatList from '../index';
import Text from '../../Text';

describe('components => Flatlist', () => {
    
  const eventData = [
    {_id: '1', description: 'تابستون امسال با بهترین های', title: 'عینک طبی'} ];
  it('test Flatlist', () => {
    const screen = render(
      <FlatList
        testID="flatlist-ID"
        data={eventData}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />,
    );
    const Flatlist = screen.getByTestId('flatlist-ID');
    expect(FlatList).toHaveBeenCalled
    expect(Flatlist).toHaveProp('testID', 'flatlist-ID');
    expect(Flatlist).toHaveProp('data', eventData);
  });
});
