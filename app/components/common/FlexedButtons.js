
import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const FlexedButtons = () => (
  <View style={styles.container}>
     <View style={styles.buttonContainer}>
      <Button title="World"/>
    </View>
    <View style={styles.buttonContainer}>
      <Button title="Breaking"/>
    </View>
    <View style={styles.buttonContainer}>
      <Button title="Sports"/>
    </View>
    <View style={styles.buttonContainer}>
      <Button title="Cinema"/>
    </View>
    <View style={styles.buttonContainer}>
      <Button title="Tech"/>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    flex: 1,
    marginRight: 2,
    marginLeft: 2
  }
});


export default FlexedButtons;