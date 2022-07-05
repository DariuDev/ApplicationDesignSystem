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
import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import styles from '../src/atoms/RadioButton/style';
import Header from '../src/components/Header/Header';
import { Slider } from './../src/components';
import { CardSliderHomePage, CardSliderDiscount } from './../src/components/Slider/CardSlider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import style from './style';
import { OfferPager } from '../src/components/OfferPager/OfferPager';


const App = () => {
  const [user, setUser] = useState('');

  const data = [
    { value: '1', title: 'data 1' },
    { value: '2', title: 'data 2' },
  ];
  const dataSlider = [
    { _id: '1', description: 'تابستون امسال با بهترین های', title: 'عینک آفتابی' },
    { _id: '2', description: 'تابستون امسال با بهترین های', title: 'عینک آفتابی' },
    { _id: '3', description: 'تابستون امسال با بهترین های', title: 'عینک آفتابی' },
    { _id: '4', description: 'تابستون امسال با بهترین های', title: 'عینک آفتابی' },
    { _id: '5', description: 'تابستون امسال با بهترین های', title: 'عینک آفتابی' },
  ];

  const func = (a: number) => {
    console.log(a + 3);
    return a + 3;
  };
  return (
    <View style={{ alignItems: 'center', flex: 1, backgroundColor: 'blue' }}>
      <Header
        onPress={() => console.log('pressed')}
        height={60}
        backgroundColor="#061d72"
      />
      <ScrollView >
        {/* <Card
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
            >
              <MaterialIcons name={'arrow-back-ios'} size={14} color={'#fff'} />
            </Button>
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
              styleOut={{ backgroundColor: 'yellow', width: 50, height: 50, }}
              textAlign='left'
            >
              <MaterialIcons name={'arrow-back-ios'} size={14} color={'#fff'} />
            </TextInputPlaceHolder>
          </View>
        </Card> */}

        <Slider values={dataSlider}
          renderItem={({ item }) => (
            <CardSliderHomePage
              item={item} />
          )}
        />
        <OfferPager />

        {/* <Slider values={dataSlider} isTopChildren={true}
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
        </Slider> */}
      </ScrollView>





    </View>
  );
};
export default App;
