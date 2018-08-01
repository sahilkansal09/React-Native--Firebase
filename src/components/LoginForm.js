import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text, TextInput } from 'react-native';
import { Button, CardSection, Spinner } from './common';

class LoginForm extends Component{
  state = { email: '', password: '', error: '', loading: false };

render(){
    return (
      <View>
        <CardSection>
            <Text style={{ width: 100, color: 'white', fontSize: 20, marginTop: 100  }}> Email: </Text>
            <TextInput
            autoCorrect={false}
            autoCapitalize='none'
            value={this.state.email}
            placeholderTextColor='white'
            keyboardType={'email-address'}
            onChangeText={email => this.setState({ email })}
            placeholder={'Enter Email'}
            style={{ marginLeft:24 ,width: 160, fontSize: 16,height: 22, marginTop: 100, marginRight: 20, color: 'white'  }}
            />
        </CardSection>

        <CardSection>
            <Text style={{ width: 120, color: 'white', fontSize: 20, marginTop: 20,  }}> Password: </Text>
            <TextInput
              autoCorrect={false}
              secureTextEntry={true}
              placeholder={'Enter Password'}
              placeholderTextColor={'white'}
              value={this.state.password}
              onChangeText={password => this.setState({ password  })}
              style={{ marginLeft:5, width: 160, fontSize: 16 ,height: 22, marginTop: 20, marginRight: 20, color: 'white', }}
              />
        </CardSection>
        <Text style={{ color: 'red', fontSize: 20 }}> {this.state.error}
        </Text>

        {/* <CardSection>
          {this.renderButton()}
        </CardSection> */}
      </View>
    )
  };
}

export default LoginForm;
