import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import { Icon } from '../../../src/atoms';

storiesOf('Icon ', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Icon 1', () => (

    <Icon type={MaterialIcons} name={'local-fire-department'} size={40} color={'red'} />

  )).add('Icon 2', () => (

    <Icon type={AntDesign} name={'like1'} size={20} color={'#000'} />

  )).add('Icon 3', () => (

    <Icon type={Ionicons} name={'ios-cafe'} size={30} color={'blue'} />

  ))