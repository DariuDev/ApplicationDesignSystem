import React from 'react';
import {render} from '@testing-library/react-native';
import Card from '../Card';
import Text from '../../Text'

describe('components > Card', () => {

  it('test card', () => {
    const screen = render(
      <Card style={{justifyContent: 'center'}}><Text>Dariush</Text></Card>
    );
    const card = screen.getByTestId('card-id');
    expect(card).toHaveProp('testID', 'card-id');
    expect(card).toHaveStyle({justifyContent:  'center'})
    expect(card).toHaveTextContent( 'Dariush' );

  });
});
