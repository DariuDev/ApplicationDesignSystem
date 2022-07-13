import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import { CheckBox } from '../../../src/atoms';

storiesOf('CheckBox ', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('CheckBox 1', () => (

    <CheckBox title="box1" isChecked={false} iconRight={false} colorCheck='pink' />

  )).add('CheckBox 2', () => (

    <CheckBox title="box2" isChecked={true} iconRight={false} colorCheck='blue' />

  )).add('CheckBox 3', () => (

    <CheckBox title="box3" isChecked={false} iconRight={true} colorCheck='red' />

  ))