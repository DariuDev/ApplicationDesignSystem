import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import { Badge, Text, Icon } from '../../../src/atoms';
import { MaterialIcons } from '../../../src/atoms/Icon/type';

storiesOf('Badge ', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Badge 1', () => (
    <Badge
      size={40}
      onPress={() => console.log('onpress')}
      onTouchMove={() => console.log('touch move')}>
      <Text> 1</Text>
    </Badge>
  )).add('Badge 2', () => (
    <Badge
      size={20}
      styleBadge={{ backgroundColor: 'yellow' }}>
      <Text> 2</Text>
    </Badge>
  )).add('Badge 3', () => (
    <Badge
      size={60}>
      <Icon type={MaterialIcons} name={'local-fire-department'} size={40} color={'red'} />
    </Badge>
  ))