import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Text, View} from 'react-native';
import TextFieldWithButton from '../components/TextFieldWithButton';
import {getAPi} from '../helpers/api';
import {CommonStyle} from '../style/style';
import {PRODUCT_API, PRODUCT_SEARCH_API} from '../constants/config';
import ProductItem from '../components/ProductItem';

const ProductList = ({navigation}) => {
  const [productList, setProductList] = useState([]);
  const [searchText, setSearchText] = useState('phone');

  useEffect(() => {
    getAPi(
      PRODUCT_API,
      data => {
        console.log('product = ' + JSON.stringify(data));
        setProductList(data.products);
      },
      error => {
        // Alert.alert(error);
      },
    );
  }, []);

  const renderItem = ({item}) => {
    return (
      <ProductItem
        title={item.title}
        description={item.description}
        image={item.thumbnail}
        navigation={navigation}
        onRowPress={() => {
          navigation.navigate('ProductDetail', {
            title: item.title,
            description: item.description,
            price: item.price,
          });
        }}
      />
    );
  };

  const btnHandler = () => {
    let url = PRODUCT_SEARCH_API + '' + searchText;
    console.log('product search url ' + url);
    getAPi(
      url,
      data => {
        console.log('product search result = ' + JSON.stringify(data.products));
        setProductList(data.products);
      },
      error => {},
    );
  };

  return (
    <View style={CommonStyle.mainContainer}>
      <TextFieldWithButton
        text={searchText}
        setText={setSearchText}
        btnPress={btnHandler}
      />
      <FlatList data={productList} renderItem={renderItem} />
    </View>
  );
};

export default ProductList;
