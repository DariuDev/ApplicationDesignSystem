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
import { ExplosiveOffers, HeaderHomePageSlider, Header, ImmediateDelivery, AccessoriesOrnaments, BestSellingLaptop } from './../src/components';
import styles from '../src/atoms/RadioButton/style';
import { MaterialIcons } from '../src/atoms/Icon/type'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import style from './style';
import { QueryClient, QueryClientProvider } from 'react-query';
import Categories from '../src/components/Categories/Categories';
import CheckBox from './../src/atoms/Checkbox/index';
import CarouselCards from '../src/components/CarouselSlider/CarouselSlider';
// import dataCrouser from '../src/components/Slider/data';
// import CarouselCardItem from './../src/components/Slider/SliderCardItem';



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
    { _id: '114', title: 'لوازم خودرو', img: 'hjkhkjhh' },
    { _id: '115', title: 'لوازم التحریر', img: 'hjkhkjhh' },
    { _id: '116', title: 'ورزش وسفر', img: 'hjkhkjhh' },
    { _id: '117', title: 'تندرستی', img: 'hjkhkjhh' },
    { _id: '118', title: 'خانه و باغچه', img: 'hjkhkjhh' },
    { _id: '119', title: 'اسباب بازی', img: 'hjkhkjhh' },
    { _id: '117', title: 'تندرستی', img: 'hjkhkjhh' },
    { _id: '118', title: 'خانه و باغچه', img: 'hjkhkjhh' },
    { _id: '119', title: 'اسباب بازی', img: 'hjkhkjhh' },
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

  return (
    <QueryClientProvider client={queryClient}>
      <View style={{ alignItems: 'center', flex: 1, backgroundColor: '#fff' }}>
        <Header
          onPress={() => console.log('pressed')}
          height={85}
          backgroundColor="#061d72"
        />


        <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderHomePageSlider
          dataCrouser={dataSlider}
          onPress={() => console.log(' title')}
        />
        {/* <CarouselCards
           data={dataCrouser} 
           renderItem={({ item, index }) => (<CarouselCardItem onPress={()=>console.log(index)} item={item} index={index} />)} 
           
           /> */}
          {/* <IHeaderHomePageSlider data={dataSlider} onPressTitle={() => console.log(' title')} /> */}
          <ExplosiveOffers data={dataSlider} />

          <Categories data={dataCategories} onPressItem={() => console.log(' title')} />
       
          {/* <AccessoriesOrnaments
            data={dataSlider}
            showAll={() => console.log('show all')}
            onPressItem={() => console.log('onpress item')}
          /> */}

          <ImmediateDelivery
            data={data1}
            showAll={() => console.log('show all')}
            onPressTitle={() => console.log('onpress title')}
          />
          <BestSellingLaptop onPressItem={() => console.log('onpress item')} data={data1} showAll={() => console.log('show all')} />

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