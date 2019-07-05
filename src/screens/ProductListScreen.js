import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, FlatList} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { GET_PRODUCTS_INIT } from '../action-types/products';


class ProductListScreen extends Component {

  componentDidMount() {
    this.props.getProducts();
  }

  logOut = () => {
    AsyncStorage.clear();
    this.props.navigation.navigate('AuthLoading')
  }

  render() {
    const { data, isLoading } = this.props;
    if(isLoading === true) {
      return <ActivityIndicator />
    } else {
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
}

const mapStateToProps = state => ({
  data: state.products && state.products.products,
  isLoading: state.products.isLoading,
});

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch({ type: GET_PRODUCTS_INIT }),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductListScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 100,
    fontSize: 50,
  }
})