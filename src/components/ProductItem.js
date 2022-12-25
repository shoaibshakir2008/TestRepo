import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CommonStyle} from '../style/style';

const ProductItem = ({title, description, image, onRowPress, navigation}) => {
  return (
    <TouchableOpacity onPress={onRowPress}>
      <View style={styles.item}>
        <Text style={CommonStyle.componentGap}>{title}</Text>
        <Text style={CommonStyle.componentGap}>{description}</Text>
        <Image
          style={[CommonStyle.componentGap, styles.image]}
          source={{uri: image}}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default ProductItem;
