import React, { Component } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

export default class AuthLoadingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Loading...
        </Text>
        <ActivityIndicator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    fontSize: 50,
  },
  text: {
    textAlign: 'center',
  }
})