import React, {useState} from 'react';
import {Alert, Button, View} from 'react-native';
import TextField from '../components/TextField';
import {LOGIN_API} from '../constants/config';
import {postAPi} from '../helpers/api';
import {CommonStyle} from '../style/style';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('kminchelle');
  const [password, setPassword] = useState('0lelplR');

  const btnLogin = () => {
    let packet = {
      username: username,
      password: password,
    };
    postAPi(
      LOGIN_API,
      packet,
      data => {
        console.log('login ' + JSON.stringify(data));
        navigation.navigate('ProductList');
      },
      error => {
        Alert.alert(error);
      },
    );
  };

  return (
    <View style={CommonStyle.mainContainer}>
      <TextField label={'Username'} text={username} setText={setUsername} />
      <TextField label={'Password'} text={password} setText={setPassword} />
      <View style={CommonStyle.btn}>
        <Button title="Login" onPress={btnLogin} />
      </View>
    </View>
  );
};

export default Login;
