// import React from 'react';
// import renderer from 'react-test-renderer';
// import Button from '../Button';


// test('renders correctly Button', () => {
//   const tree = renderer.create(<Button title={'clickMe'}/>).toJSON();
//   expect(tree).toMatchSnapshot();
// });

import React from 'react';
import Button from '../Button';
import { fireEvent, render, wait } from '@testing-library/react-native';

const caption = 'Test button';
describe('Button', () => {
  const activeButton  = render(<Button title={caption}/>);
   const { getByTestId,  getByText,debug }= activeButton ;
  it('renders correctly', () => {
    const activeButtonAsJson = activeButton.toJSON();
    expect(activeButtonAsJson).toMatchSnapshot();

    expect(getByText(caption)).toBeTruthy();
    fireEvent.press(getByTestId("custtomButton"));

  });
  // expect(component).toMatchSnapshot();
  // it('Outputs the correct text', () => {
  //   expect(getByText(caption)).toBeTruthy();
  // });
  // expect(getByTestId("custtomButton")).toBeTruthy();

  // it('Fires the assigned event on press', () => {
  //   fireEvent.press(activeButton.getByTestId("custtomButton"));
    
  //     // expect().
  
  // });
  // fireEvent.press(getByTestId('custtomButton'))
});






