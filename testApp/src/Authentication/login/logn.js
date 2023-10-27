import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { Input } from '@ui-kitten/components';
import {styles as func} from './loginStyle';
const Login = () => {
  const styles = func();
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
      <Input
      placeholder='Place your Text'
      // value={value}
      onChangeText={nextValue => setValue(nextValue)}
    />
      </View>
      <View style={styles.inputContainer}></View>
    </View>
  );
};

export default Login;
