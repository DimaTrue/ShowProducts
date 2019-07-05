import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native';
import { validate } from '../redux-form/validate';
import { Field, reduxForm } from 'redux-form';
import { RenderField } from '../redux-form/RenderField';
import { SIGN_UP_INIT } from '../action-types/userData';

class SignUpScreen extends Component {

  submit = () => {
    const { navigation, values, signUp } = this.props;
    signUp(values);
    navigation.navigate('SignIn');
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={styles.container}>
        <Text style={{paddingTop: 70}}>
          SignUpScreen
        </Text>
        <View style={styles.container}>
          <Field
            name="username"
            component={RenderField}
            label="username"
          />
          <Field
            name="email"
            component={RenderField}
            label="email"
          />
          <Field
            name="password1"
            component={RenderField}
            label="password"
          />
          <Field
            name="password2"
            component={RenderField}
            label="password-repeat"
          />
          <View>
            <TouchableOpacity style={styles.sendBtn} onPress={handleSubmit(this.submit)} >
              <Text style={styles.btnText}> Sign Up </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  values: state.form.register.values
})

const mapDispatchToProps = dispatch => ({
  signUp : (values) => dispatch({ type: SIGN_UP_INIT, payload: values})
})

const WrappedSignUp = connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);

export default reduxForm({
  form: 'register',
  validate
})(WrappedSignUp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
})