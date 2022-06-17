import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import {Button} from '../../../src/components';
import style from './styles';

storiesOf('Btn ', module)
//   .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Button 1', () => (
   
   <Button title={'Button 1'} styleBtton={style.btn1} />

  )).add('Button 2', () => (
   
    <Button title={'Button 2'}  styleBtton={style.btn2}/>
 
   )).add('Button 3', () => (
   
    <Button title={'Button 3'} styleBtton={style.btn3} />
 
   ))