import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/views/Login';
import ProductList from './src/views/ProductList';
import ProductDetail from './src/views/ProductDetail';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="ProductList" component={ProductList}></Stack.Screen>
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
