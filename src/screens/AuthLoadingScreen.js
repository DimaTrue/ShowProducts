import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

import { getUserData } from '../actions/userData';

class AuthLoadingScreen extends Component {

  async componentDidMount() {
    await this.props.getUserData();
	}

	componentWillUpdate(nextProps) {
		if (nextProps.userData !== null) {
			this.props.navigation.navigate('App')
		} else {
			this.props.navigation.navigate('Auth')
		}
	}

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

const mapStateToProps = state => ({
	userData: state.userData.userData,
});

const mapDispatchToProps = dispatch => ({
	getUserData: () => dispatch(getUserData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);

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