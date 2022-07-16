import React from 'react';
import { render } from '@testing-library/react-native';
import Layout from '../Layout';
import { Text,Dimensions } from 'react-native';
const { width } = Dimensions.get('screen');


describe('components >> Layout ', () => {
  const data = [
    { '_id': '11', 'title': 'emel1' },
    { '_id': '12', 'title': 'emel2' },
    { '_id': '13', 'title': 'emel3' },
    { '_id': '14', 'title': 'emel4' }];
  const CategoriesCard = ({ item }) => {
    return <Text testID={`text_categories_test${item._id}`}>Hi {item.title} !</Text>
  }
  it('Show Layout', () => {
    const screen = render(<Layout
      ItemNode={CategoriesCard}
      data={data}
      column={2}
      styleLayout={{ backgroundColor: 'black' }}
    />
    );
    expect(screen.getByTestId('layout-test')).toHaveProp('testID', 'layout-test');
    expect(screen.getByText('Hi emel1 !')).toBeDefined();
    expect(screen.getByTestId('text_categories_test11')).toHaveTextContent('Hi emel1 !');
    expect(screen.getByTestId('layout-test').children.length).toBe(4);
    expect(screen.getByTestId('layout-test')).toHaveStyle({ backgroundColor: 'black'});
    expect(screen.getByTestId('layout-row-test11')).toHaveStyle({width: width / (2 / 10 + 2) });
  });
});