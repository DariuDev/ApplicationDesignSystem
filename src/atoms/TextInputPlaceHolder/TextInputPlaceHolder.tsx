import React, { Children, useState } from 'react';
import { TextInput, View, TextInputProps } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TextInputPlaceHolderType } from '../../types';
import styles from './style';

// type InputTextTypeProops=TextInputPlaceHolderType<any> & TextInputProps;
type InputTextTypeProops = TextInputPlaceHolderType & TextInputProps;

const TextInputPlaceHolder: React.FC<InputTextTypeProops> = (props) => {
  const { Children,placeholder, styleIn, styleOut, testID, iconName, sizeIcon, colorIcon = 'grey', ...otherprops } = props;

  const [isIcon, setIsIcon] = useState<boolean>(Children?true:false);
  const [userP, setUserP] = useState('');

  //  const textAlign =  props.textAlign?  props.textAlign :( styles.inputIn.textAlign);
  // const textAlign=  styleIn  &&  Object.values(styleIn).includes("textAlign") ? (styleIn?.textAlign) :( styles.inputIn.textAlign);
  const textAlign = otherprops.textAlign ? (otherprops.textAlign) : ("right");
  const handelChangeText = (s: string) => {
    setUserP(s);
    if (s) {
      setIsIcon(false);
    } else {
      setIsIcon(true);
    }
  }

  return (
    <View style={[styles.inputOut, { ...styleOut }]}>
      {isIcon  && textAlign === 'left' && Children}
        {/* <MaterialIcons name={iconName} size={sizeIcon} color={colorIcon} testID="placeholder-icon-test" />
      } */}
      {/* <TextInput textAlign='right'
        {...otherprops}
        placeholder={placeholder}
        onChangeText={handelChangeText}
        value={userP}
        testID={testID}
        style={[styles.inputIn, { ...styleIn }]}
      /> */}
      {isIcon  && textAlign === 'right' && Children}
        {/* <MaterialIcons name={iconName} size={sizeIcon} color={colorIcon} testID="placeholder-icon-test" />
      } */}
    </View>

  );
};

export default TextInputPlaceHolder;
