//  export default from '../storybook';
import {
  Input,
  RadioButton,
  Button,
  CheckBox,
  Card,
  ModalC,
  Badge,
  Text,
  TextInputPlaceHolder
} from '../src/atoms';
import React, { useState } from 'react';
import { View } from 'react-native';
import styles from '../src/atoms/RadioButton/style';
import Header from '../src/components/Header/Header';
import Search from '../src/components/Search/Search';

const App = () => {
  const [user, setUser] = useState('');

  const data = [
    { value: '1', title: 'data 1' },
    { value: '2', title: 'data 2' },
  ];

  const func = (a: number) => {
    console.log(a + 3);
    return a + 3;
  };
  return (
    <View>
      <Header />
      <Card borderRadius={10} width={300} height={250} borderWidth={1}>
        <View>
          <Input
            iconName="Search"
            testID="text-input"
            value={user}
            onChangeText={setUser}
            placeholder={'type here'}

          />
          <RadioButton
            style={{ flexDirection: 'row' }}
            data={data}
            onPress={index => {
              console.log(data[index - 1].title);
            }}
            selectedStyle={styles.smallSelected}
            unselectedStyle={styles.bigUnselected}
          />
          <Button
            title="ClickMe"
            onPress={() => func(3)}
            onTouchMove={() => console.log('emel')}
          />
          <CheckBox title="hhhh" isChecked={true} colorCheck={'blue'} />
          <ModalC open={true} onClose={() => console.log('tt')}>
            <Text>hi</Text>
          </ModalC>

          <Badge
            size={40}
            onPress={() => console.log('tt')}
            onTouchMove={() => console.log('mmm')}>
            <Text>5</Text>
          </Badge>
          <Text
            backgroundColor={'black'}
            color={'white'}
            onPress={() => console.log('pressed')}>
            Hello World!
          </Text>

          <TextInputPlaceHolder
            placeholder="hi :))"
            iconName='check-circle'
           textAlign='left'
          />
        </View>
      </Card>

    </View>
  );
};
export default App;
