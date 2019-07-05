import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class SignInScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>
          SignInScreen
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
})