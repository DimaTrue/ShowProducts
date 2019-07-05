import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { validate } from '../redux-form/validate';
import { RenderField } from '../redux-form/RenderField';
import { SIGN_IN_INIT } from '../action-types/userData';

class SignInScreen extends Component {

  submit = () => {
    const { values, signIn } = this.props;
    signIn(values);
    this.props.navigation.navigate('AuthLoading')
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={styles.container}>
        <Text>
          SignInScreen
        </Text>
        <View style={styles.container}>
          <Field
            name="email"
            component={RenderField}
            label="email"
          />
          <Field
            name="password"
            component={RenderField}
            label="password"
          />
          <View>
            <TouchableOpacity style={styles.sendBtn} onPress={handleSubmit(this.submit)} >
              <Text style={styles.btnText}> Sign In </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  values: state.form.login && state.form.login.values,
})

const mapDispatchToProps = dispatch => ({
  signIn: (values) => dispatch({ type: SIGN_IN_INIT, payload: values })
})

const WrappedSignIn = connect(mapStateToProps, mapDispatchToProps)(SignInScreen);

export default reduxForm({
  form: 'login',
  validate
})(WrappedSignIn);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
})