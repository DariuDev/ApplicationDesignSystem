import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import {RadioButton} from '../../../src/atoms';
import styles from '../../../src/atoms/RadioButton/style';

storiesOf('Radio Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('small ', () => (
    <RadioButton
      data={data}
      onPress={action('clicked-text')}
      selectedStyle={styles.smallSelected}
      unselectedStyle={styles.smallUnselected}
    />
  ))
  .add('medium', () => (
    <RadioButton
      data={data}
      onPress={action('clicked-text')}
      selectedStyle={styles.mediumSelected}
      unselectedStyle={styles.mediumUnselected}
    />
  )).add('big', () => (
    <RadioButton
    data={data}
    onPress={action('clicked-text')}
    selectedStyle={styles.bigSelected}
    unselectedStyle={styles.bigUnselected}
  />
  ))
const data = [
  {value: '1', title: 'data 1'},
  {value: '2', title: 'data 2'},
  {value: '3', title: 'data 3'},
];
