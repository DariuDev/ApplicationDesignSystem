import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CustomText from '../index';

describe('components > Text', () => {
  const onPressMock = jest.fn();
  const eventData = {
    nativeEvent: {
      pageX: 20,
      pageY: 30,
    },
  };
  it('test text', () => {
    const screen = render(
      <CustomText
        testID="custom-text"
        backgroundColor="black"
        padding={10}
        onPress={onPressMock}>
        Dariush
      </CustomText>,
    );
    const text = screen.getByTestId('custom-text');
    expect(text).toHaveProp('testID', 'custom-text');
    expect(text).toHaveProp('onPress', onPressMock);
    expect(text).toHaveStyle({backgroundColor: 'black'});
    expect(text).toHaveStyle({padding: 10});

    expect(text.props.children).toEqual('Dariush');

    fireEvent.press(text, eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);
  });
});
