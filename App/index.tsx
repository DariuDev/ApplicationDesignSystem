//  export default from '../storybook';// export default from '../storybook';
import {
  // Layout,
  //   Input,
  //   RadioButton,
  //   Button,
  //   CheckBox,
  //   Card,
  //   ModalC,
  //   Badge,
  Text,
  //   TextInputPlaceHolder,
  Icon,
  ScrollView as FakeScrollView,
} from '../src/atoms';

import React, { useState } from 'react';
import { View, ScrollView, Pressable } from 'react-native';
import {
  ExplosiveOffers,
  Header,
  ImmediateDelivery,
  AccessoriesOrnaments,
  Categories,
  BestSellingLaptop,
  BestSellingMalltina,
  TopBrands,
  GridList,
  //HeaderHomePageSlider,
} from '../src/components';
import HeaderHomePageSlider from '../src/componentsOld/HeaderHomePageSlider2/HeaderHomePageSlider';
import styles from '../src/atoms/RadioButton/style';
import { MaterialIcons } from '../src/atoms/Icon/type';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import style from './style';
import { QueryClient, QueryClientProvider } from 'react-query';

import CheckBox from './../src/atoms/Checkbox/index';
import CarouselCards from '../src/componentsOld/CarouselSlider/CarouselSlider';
// import dataCrouser from '../src/components/Slider/data';
// import CarouselCardItem from './../src/components/Slider/SliderCardItem';
import TestScrollInfnit from './../src/componentsOld/TestScrollInfnit/TestScrollInfnit';

const queryClient = new QueryClient();
const App = () => {
  const [user, setUser] = useState('');

  const data = [
    { value: '1', title: 'data 1' },
    { value: '2', title: 'data 2' },
  ];

  const dataSlider = [
    { _id: '1', description: 'تابستون امسال با بهترین های', title: 'عینک طبی' },
    {
      _id: '2',
      description: 'تابستون امسال با بهترین های',
      title: 'عینک آفتابی',
    },
    { _id: '3', description: 'تابستون امسال با بهترین های', title: 'عینک طبی' },
    {
      _id: '4',
      description: 'تابستون امسال با بهترین های',
      title: 'عینک آفتابی',
    },
    { _id: '5', description: 'تابستون امسال با بهترین های', title: 'عینک طبی' },
  ];
  const dataCategories = [
    { _id: '114', title: 'لوازم خودرو', image: '' },
    { _id: '115', title: 'لوازم التحریر', image: '' },
    { _id: '116', title: 'ورزش وسفر', image: '' },
    { _id: '117', title: 'تندرستی', image: '' },
    { _id: '118', title: 'خانه و باغچه', image: '' },
    { _id: '119', title: 'اسباب بازی', image: '' },
    { _id: '117', title: 'تندرستی', image: '' },
    { _id: '118', title: 'خانه و باغچه', image: '' },
    { _id: '119', title: 'اسباب بازی', image: '' },
  ];

  const dataBestSelling = [
    { _id: '114', title: 'لوازم خودرو', img: 'hjkhkjhh' },
    { _id: '115', title: 'لوازم التحریر', img: 'hjkhkjhh' },
    { _id: '116', title: 'ورزش وسفر', img: 'hjkhkjhh' },
    { _id: '117', title: 'تندرستی', img: 'hjkhkjhh' },
    // { _id: '118', title: 'خانه و باغچه',img:'hjkhkjhh' },
    // { _id: '119', title: 'اسباب بازی',img:'hjkhkjhh'},
    // { _id: '117', title: 'تندرستی' ,img:'hjkhkjhh'},
    // { _id: '118', title: 'خانه و باغچه',img:'hjkhkjhh' },
    // { _id: '119', title: 'اسباب بازی' ,img:'hjkhkjhh'},
  ];
  const dataImage = [
    {
      image: '',
    },
    {
      image: '',
    },
    {
      image: '',
    },
    {
      image: '',
    },
  ];
  const data1 = [
    {
      image: '',
      title: 'mens dust protection sport hoodie tops',
      price: '4,200,000',
      off: '15',
      mainPrice: '22,000,000',
    },
    {
      image: '',
      title: 'mens dust protection sport hoodie tops',
      price: '4,200,000',
      mainPrice: '22,000,000',
    },
    {
      image: '',
      title: 'mens dust protection sport hoodie tops',
      price: '4,200,000',
      off: '15',
      mainPrice: '22,000,000',
    },
    {
      image: '',
      title: 'mens dust protection sport hoodie tops',
      price: '4,200,000',
      off: '15',
      mainPrice: '22,000,000',
    },
  ];
  const dataBrand = [
    {
      image: 'hggf',
    },
    {
      image: 'yyyyyy',
    },
    {
      image: 'kkkk',
    },
    {
      image: 'ttttt',
    },
  ];

  return (
    <QueryClientProvider client={queryClient}>
      <View style={{ alignItems: 'center', flex: 1, backgroundColor: '#fff' }}>
        <Header
          onPress={() => console.log('pressed')}
          height={85}
          backgroundColor="#061d72"
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <TestScrollInfnit /> */}
          <HeaderHomePageSlider data={dataSlider} onPressTitle={() => console.log(' title')} />
          <ExplosiveOffers data={dataSlider} />

          <Categories data={dataCategories} onPressItem={() => console.log(' title')} />
          <GridList
            data={dataImage}
            onPressItem={() => console.log('onpress item')}
          />
          <AccessoriesOrnaments
            data={dataSlider}
            showAll={() => console.log('show all')}
            onPressItem={() => console.log('onpress item')}
          />

          <ImmediateDelivery
            data={data1}
            showAll={() => console.log('show all')}
            onPressTitle={() => console.log('onpress title')}
          />

          <TopBrands data1={dataBrand} data2={dataBrand} data3={dataBrand} />

          <BestSellingLaptop
            onPressItem={() => console.log('onpress item')}
            data={data1}
            showAll={() => console.log('show all')}
          />
          <BestSellingMalltina
            onPressItem={() => console.log('onpress item')}
            data={data1}
            showAll={() => console.log('show all')}
          />

        </ScrollView>
      </View>
    </QueryClientProvider>
  );
};
export default App;

{
  /* <Card
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
        </Card> */
}
