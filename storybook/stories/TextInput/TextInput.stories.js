
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import {Input} from '../../../src/components';

storiesOf('Text Input', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Input 1', () => (
   
   <Input placeholder={'type here'}  />

  )).add('Input 2', () => (
   
    <Input placeholder={'type here'} style={{width: '50%'}}/>
 
   )).add('Input 3', () => (
   
    <Input placeholder={'type here'} style={{width: '100%'}}/>
 
   ))