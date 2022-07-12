import {
  Layout,
  //   Input,
  //   RadioButton,
  //   Button,
  //   CheckBox,
  //   Card,
  //   ModalC,
  //   Badge,
  Text,
  //   TextInputPlaceHolder,
  ScrollView as FakeScrollView,
} from '../src/atoms';
import React, { useState } from 'react';
import { View, ScrollView, Pressable } from 'react-native';
import { ExplosiveOffers, Header, ImmediateDelivery } from './../src/components';
import styles from '../src/atoms/RadioButton/style';
import { Slider } from './../src/components';
import {
  CardSliderHomePage,
  // CardSliderDiscount,
} from './../src/components/Slider/CardSlider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import style from './style';
import { QueryClient, QueryClientProvider } from 'react-query';
import Categories from '../src/components/Categories/Categories';

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
 

  return (
    <QueryClientProvider client={queryClient}>
      <View style={{ alignItems: 'center', flex: 1 }}>
        <Header
          onPress={() => console.log('pressed')}
          height={85}
          backgroundColor="#061d72"
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <FakeScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginEnd: 20, marginTop: 10 }}>
            {dataSlider.map(p => {
              return <CardSliderHomePage item={p} />;
            })}
          </FakeScrollView>

          <ExplosiveOffers data={dataSlider} />

          <Categories/>
  
        
          <ImmediateDelivery
            data={dataSlider}
            showAll={() => console.log('show all')}
            onPressTitle={() => console.log('onpress title')}
          />
          {/* 
           <Slider data={dataSlider}
            contentContainerStyle={{ marginTop: 12 }}
            renderItem={({ item }) => (
              <CardSliderHomePage
                item={item} />
            )}
          />
          <Slider
          data={dataSlider} isTopChildren={true}
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
