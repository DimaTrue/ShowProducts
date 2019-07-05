import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class AddedProductsScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>
          AddedProductsScreen
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