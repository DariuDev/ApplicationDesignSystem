import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import HistoryVisit from '..';

const dataSlider = [
    { _id: '1', description: 'تابستون امسال با بهترین های', title: '1عینک طبی' },
    {
      _id: '2',
      description: 'تابستون امسال با بهترین های',
      title: 'عینک آفتابی',
    },
    { _id: '3', description: 'تابستون امسال با بهترین های', title: '2عینک طبی' },
    {
      _id: '4',
      description: 'تابستون امسال با بهترین های',
      title: 'عینک آفتابی',
    },
    { _id: '5', description: 'تابستون امسال با بهترین های', title: 'عینک طبی' },
  ];
describe('components => HistoryVisit', () => {
  const onPressMock = jest.fn();
  const eventDataScroll = {
    nativeEvent: {
      contentOffset: {
        y: 200,
      },
    },
  };
  const eventDataOnPress = {
    nativeEvent: {
      pageX: 20,
      pageY: 30,
    },
  };
  it('test HistoryVisit', () => {
    const screen = render(
      <HistoryVisit
        showAll={onPressMock}
        onPressItem={onPressMock}
        data={dataSlider}
      />,
    );
    fireEvent.scroll(screen.getByTestId('scrollView-id'), eventDataScroll);
    
    expect(screen.getByTestId('cardItem-0')).toHaveTextContent(
      '1عینک طبی',
    );
    expect(screen.getByTestId('cardItem-1')).toHaveTextContent(
      'عینک آفتابی',
    );
    expect(screen.getByTestId('cardItem-2')).toHaveTextContent(
      '2عینک طبی',
    );

    expect(screen.getByTestId('historyText-id')).toHaveTextContent('تاریخچه بازدیده');
    expect(screen.getByTestId('editText-id')).toHaveTextContent('ویرایش ');

    fireEvent.press(screen.getByTestId('cardItem-0'), eventDataOnPress);
    expect(onPressMock).toHaveBeenCalledWith(eventDataOnPress);

    fireEvent.press(screen.getByTestId('editText-id'), eventDataOnPress);
    expect(onPressMock).toHaveBeenCalledWith(eventDataOnPress);
  });
});
