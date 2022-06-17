import React from 'react';
import Button from '../Button';
import { fireEvent, render, wait } from '@testing-library/react-native';

const caption = 'Test button';
describe('Button', () => {
  const activeButton  = render(<Button title={caption}/>);
   const { getByTestId,  }= activeButton ;
  it('renders correctly', () => {
    const activeButtonAsJson = activeButton.toJSON();
    expect(activeButtonAsJson).toMatchSnapshot();

    fireEvent.press(getByTestId("custtomButton"));
    expect(getByTestId("custtomButton")).toBeDefined();

  });
});






