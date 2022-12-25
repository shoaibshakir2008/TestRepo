import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const TextField = ({label, text, setText}) => {
  return (
    <View>
      <Text> {label}</Text>
      <View style={styles.textfield}>
        <TextInput value={text} onChangeText={e => setText(e)}></TextInput>
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

export default TextField;
