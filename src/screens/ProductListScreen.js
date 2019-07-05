import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, FlatList} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';


export default class ProductListScreen extends Component {

  state = {
    data: [],
    // isLoading: true,
  }

  componentDidMount() {
    axios.get(`http://light-it-04.tk/api/posters`)
      // .then(response => console.warn(response.data.data))
      .then(response => this.setState({ data: response.data.data }))
      .catch(error => console.warn(error))
  }

  logOut = () => {
    AsyncStorage.clear();
    this.props.navigation.navigate('AuthLoading')
  }

  render() {
    const { isLoading, data } = this.state;

    // if(isLoading === true) {
    //   return <ActivityIndicator />
    // } else {
    return (
      <View style={styles.container}>
        <Text>
          ProductListScreen
        </Text>
        <TouchableOpacity onPress={this.logOut}>
          <Text>
            Log Out
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('MyProducts')}>
          <Text>
            AddedProducts
          </Text>
        </TouchableOpacity>
        <FlatList
          data={data}
          keyExtractor={(item) => `${item.pk}`}
          renderItem={({ item }) => <Text key={item.pk}>{item.pk}</Text>}
        />
      </View>
    )
  }
}
//}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 100,
    fontSize: 50,
  }
})