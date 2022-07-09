  import React from 'react';
  import {View} from 'react-native';
  import {combinedShapeBackground, Gradient} from '../../assets';
  import MaterialIcons from 'react-native-vector-icons/SimpleLineIcons';
  import {SvgXml} from 'react-native-svg';
  import {Card, ScrollView, Text} from '../../atoms';
  import {styles} from './style';
  import TitleOfferCard from './OfferCard/TitleOfferCard';
  import {useState} from 'react';
  import {IOfferCard} from './type'

  export const OfferPager = ({data} : IOfferCard) => {
    const [title, setTitle] = useState<string>();
    
    return (
      <View>
        <View>
          <SvgXml style={{zIndex: 3}} xml={combinedShapeBackground} />
          <TitleOfferCard
            // titleImage=""
            // mainPrice=""
            // price=""
            // timer=""
            title={title}
            // off=""
          />
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.list}>
            {data.map((item : any) => {
              return <Card
                    onPress={() =>setTitle(item.title)}
                    marginHorizontal={5}
                    flex={1}
                    borderRadius={15}
                    width={80}
                    alignItems={'center'}
                    justifyContent={'center'}
                    backgroundColor={'white'}>
                    <Text>{item.title}</Text>
                  </Card>;
            })}
          </ScrollView>
        </View>

        <Gradient style={styles.gradient} colors={['#f8616e', '#f92a5f']} />
        <View style={styles.offerTitle}>
          <Text fontWeight={'bold'} fontSize={30} color={'#fff'}>
            انفجاری
          </Text>
          <Text fontWeight={'bold'} fontSize={20} color={'#fff'}>
            تخفیف های
          </Text>
          <MaterialIcons name={'fire'} size={44} color={'#fff'} />
        </View>
      </View>
    );
  };
  {/* <FlatList
            data={dataSlider}
            horizontal={true}
            style={styles.list}
            showsHorizontalScrollIndicator={false}
            keyExtractor={i => i._id}
            renderItem={({item}) => (
          //     <Card
          //       onPress={() =>setTitle(item.title)}
          //       marginHorizontal={5}
          //       flex={1}
          //       borderRadius={15}
          //       width={80}
          //       alignItems={'center'}
          //       justifyContent={'center'}
          //       backgroundColor={'white'}>
          //       <Text>{item.title}</Text>
          //     </Card>
          //   )}
          // /> */}
