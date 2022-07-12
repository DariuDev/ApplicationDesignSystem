import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import {Button} from '../../../src/atoms/Button';
import style from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

storiesOf('Btn ', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Button 1', () => (
   
   <Button title={'Button 1'} styleBtton={style.btn1} isRightChildren={false} >
      <MaterialIcons name={'arrow-back-ios'} size={14} color={'pink'} />
   </Button>

  )).add('Button 2', () => (
   
    <Button title={'Button 2'}  styleBtton={style.btn2}/>
 
   )).add('Button 3', () => (
   
    <Button title={'Button 3'} styleBtton={style.btn3} isRightChildren={true}>
      <MaterialIcons name={'arrow-back-ios'} size={14} color={'pink'} />
    </Button>
 
   ))