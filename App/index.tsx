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
  TextInputPlaceHolder,
} from '../src/atoms';
import React, {useState} from 'react';
import {View} from 'react-native';
import styles from '../src/atoms/RadioButton/style';
import Header from '../src/components/Header/Header';
import {Slider} from './../src/components';
import CardSliderHomePage from './../src/components/Slider/CardSlider/CardSliderHomePage/index';

const App = () => {
  const [user, setUser] = useState('');

  const data = [
    {value: '1', title: 'data 1'},
    {value: '2', title: 'data 2'},
  ];
  const dataSlider = [
    {
        _id: '1',
        title: 'تیرگی چشم',
        number: 50,
        image: 'https://cdn.skinpedia.ir/v2/3.png',

    },
    {
        _id: '2',
        title: 'پف چشم ',
        number: 60,
        image: 'https://cdn.skinpedia.ir/v2/6.png',

    },
    {
        _id: '3',
        title: 'رطوبت پوست',
        number: 90,
        image: 'https://cdn.skinpedia.ir/v2/8.png',

    },
    {
        _id: '4',
        title: 'چربی پوست',
        number: 55,
        image: 'https://cdn2.skinpedia.ir/appimg/5.png',

    },
    {
        _id: '5',
        title: 'التهاب پوست',
        number: 89,
        image: 'https://cdn.skinpedia.ir/v2/1.png',

    },
    {
        _id: '6',
        title: 'لکه',
        number: 80,
        image: 'https://cdn.skinpedia.ir/v2/2.png',

    },
    {
        _id: '7',
        title: 'بافت',
        number: 89,
        image: 'https://cdn.skinpedia.ir/v2/7.png',

    },
    {
        _id: '8',
        title: 'چین و چروک پوست',
        number: 99,
         image: 'https://cdn.skinpedia.ir/v2/4.png',
    },
];

  const func = (a: number) => {
    console.log(a + 3);
    return a + 3;
  };
  return (
    <View style={{alignItems: 'center'}}>
      <Header
        onPress={() => console.log('pressed')}
        height={60}
        backgroundColor="#061d72"
      />
      <Card
        margin={10}
        borderRadius={10}
        width={'90%'}
        height={250}
        borderWidth={1}>
        <View>
          <Input
            iconName="Search"
            testID="text-input"
            value={user}
            onChangeText={setUser}
            placeholder={'type here'}
          />
          <RadioButton
            style={{flexDirection: 'row'}}
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
          <Slider values={dataSlider} top={50} title={'نتایج آخرین آنالیز شما'}
            renderItem={({ item }) => (
              <CardSliderHomePage
                item={item} />
            )}
          />
        </View>
      </Card>
    </View>
  );
};
export default App;
