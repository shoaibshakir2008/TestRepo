import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {CommonStyle} from '../style/style';

const TextFieldWithButton = ({text, setText, btnPress}) => {
  return (
    <View>
      <View style={styles.textfield}>
        <TextInput
          value={text}
          onChangeText={e => setText(e)}
          placeholder={'Search'}></TextInput>
      </View>
      <View style={CommonStyle.btn}>
        <Button title="Search" onPress={btnPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textfield: {
    marginTop: 10,
    borderWidth: 3,
    borderColor: '#000000',
    borderRadius: 10,
  },
});

export default TextFieldWithButton;
