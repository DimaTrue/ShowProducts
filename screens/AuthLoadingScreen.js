import React, { Component } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default class AuthLoadingScreen extends Component {

  componentDidMount() {
    axios.get(`http://light-it-04.tk/api/posters`)
      .then(response => console.warn(response.data.data))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Loading...
        </Text>
        {/* <ActivityIndicator /> */}
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