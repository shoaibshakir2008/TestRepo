import React from 'react';
import {Text, View} from 'react-native';
import {CommonStyle} from '../style/style';

const ProductDetail = ({route, navigation}) => {
  const {title, description, price} = route.params;

  return (
    <View style={CommonStyle.mainContainer}>
      <Text style={CommonStyle.componentGap}>Title : - {title}</Text>
      <Text style={CommonStyle.componentGap}>
        Description : - {description}
      </Text>
      <Text style={CommonStyle.componentGap}>Price : - {price}</Text>
    </View>
  );
};

export default ProductDetail;
