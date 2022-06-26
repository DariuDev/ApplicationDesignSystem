//  export default from '../storybook';
import { Input, RadioButton, Button, CheckBox, Card } from '../src/components';
import React, { useState } from 'react';
import { View } from 'react-native';
import styles from '../src/components/RadioButton/style';

const App = () => {
  const [user, setUser] = useState('');
  const data = [
    { value: '1', title: 'data 1' },
    { value: '2', title: 'data 2' },
  ];

  const func= (a: number)=> {
    console.log(a + 3);
    return a + 3;
  }
  return (
    <View style={{alignItems: 'center'}}>
      <Card borderRadius={10} width={300} height={250} borderWidth={1} >
        <View>
        <Input
        testID="text-input"
        value={user}
        onChangeText={setUser}
        placeholder={'type here'}
        style={{ margin: 10 }}
      />
       <RadioButton
        style={{flexDirection: 'row'}}
        data={data}
        onPress={(index) => {
          console.log(data[index - 1].title);
        }}
        selectedStyle={styles.smallSelected}
        unselectedStyle={styles.bigUnselected}
      />
      <Button title='ClickMe' onPress={()=>func(3)} />
      <CheckBox
       title='hhhh'
        isChecked={true}
        colorCheck={'blue'}
      />
        </View>
      </Card>
    </View>
  );
};
export default App;
