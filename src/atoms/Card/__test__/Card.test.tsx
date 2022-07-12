import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Card from '../Card';

describe('components > Card', () => {

  it('test card', () => {
    const screen = render(
      <Card marginTop={10} justifyContent={'center'}/>
    );
    const card = screen.getByTestId('card-id');
    expect(card).toHaveProp('testID', 'card-id');
    expect(card).toHaveStyle({justifyContent:  'center'})

  });
});
