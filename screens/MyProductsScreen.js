import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class MyProductsScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>
          MyProductsScreen
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 100,
    fontSize: 50,
  }
})