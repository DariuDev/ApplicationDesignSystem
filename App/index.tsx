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
<<<<<<< HEAD
import { Slider } from './../src/components';
import { CardSliderHomePage, CardSliderDiscount } from './../src/components/Slider/CardSlider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import style from './style';
=======
import {Slider} from './../src/components';
import CardSliderHomePage from './../src/components/Slider/CardSlider/CardSliderHomePage/index';
>>>>>>> 0fe3e54aadbd89b58bf7dfa2e912482629a3f4f6


const App = () => {
  const [user, setUser] = useState('');

  const data = [
    {value: '1', title: 'data 1'},
    {value: '2', title: 'data 2'},
  ];
  const dataSlider = [
    {
      _id: '1',
      description: 'تابستون امسال با بهترین های',
      title: 'عینک آفتابی',
    },
    {
      _id: '2',
      description: 'تابستون امسال با بهترین های',
      title: 'عینک آفتابی',
    },
    {
      _id: '3',
      description: 'تابستون امسال با بهترین های',
      title: 'عینک آفتابی',
    },
    {
      _id: '4',
      description: 'تابستون امسال با بهترین های',
      title: 'عینک آفتابی',
    },
    {
      _id: '5',
      description: 'تابستون امسال با بهترین های',
      title: 'عینک آفتابی',
    },
  ];

  const func = (a: number) => {
    console.log(a + 3);
    return a + 3;
  };
  return (
<<<<<<< HEAD
    <View style={{ alignItems: 'center', flex: 1 }}>
=======
    <View style={{alignItems: 'center'}}>
>>>>>>> 0fe3e54aadbd89b58bf7dfa2e912482629a3f4f6
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

<<<<<<< HEAD
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
              styleOut={{ backgroundColor: 'yellow', width: 50, height: 50, }}
              textAlign='left'
            >
              <MaterialIcons name={'arrow-back-ios'} size={14} color={'#fff'} />
            </TextInputPlaceHolder>
          </View>
        </Card>

        <Slider values={dataSlider}
          renderItem={({ item }) => (
            <CardSliderHomePage
              item={item} />
          )}
        />

        <Slider values={dataSlider} isTopChildren={true}
          styleSlider={{ backgroundColor: '#f92a5f' }}
          renderItem={({ item }) => (
            <CardSliderDiscount
              item={item} />
          )}
        >
          <View style={style.sliderDiscount}>
            <Text

              color={'white'}
              onPress={() => console.log('pressed')}>
              تخفیف های انفجاری
            </Text>
            <MaterialIcons name={'local-fire-department'} size={24} color={'#fff'} />
          </View>
        </Slider>
      </ScrollView>



=======
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
>>>>>>> 0fe3e54aadbd89b58bf7dfa2e912482629a3f4f6

          <TextInputPlaceHolder
            placeholder="hi :))"
            iconName="check-circle"
            textAlign="left"
          />
        </View>
      </Card>

      {/* <CardSliderHomePage
        //description={'تابستون امسال با بهترین های'}
        //title={'عینک آفتابی'}
      /> */}
    </View>
  );
};
export default App;
