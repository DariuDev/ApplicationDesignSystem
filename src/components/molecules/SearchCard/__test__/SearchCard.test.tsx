import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SearchCard from '..';

describe('molecules => SearchCard', () => {
  it('test SearchCard', () => {
    const onPressMock = jest.fn();
    const eventData = {
      nativeEvent: {
        pageX: 20,
        pageY: 30,
      },
    };
    const screen = render(
      <SearchCard
        onPress={onPressMock}
        iconName={'icon'}
        placeholder={'placeHolder'}
      />,
    );
    expect(screen.getByTestId('placeholder-id')).toHaveTextContent(
      'placeHolder',
    );

    fireEvent.press(screen.getByTestId('searchOnPress-id'), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);
  });
});
