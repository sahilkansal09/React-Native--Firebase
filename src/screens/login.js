import React, { Component } from 'react';
import { View, Text, TextInput, Alert, ActivityIndicator } from 'react-native';
import firebase from 'firebase';
import { Button, CardSection} from '.././components/common';
// import LoginForm from '.././components/LoginForm';
import Color from '../Utilities/Strings';

class Login extends Component {

   state = { loggedIn: null, email: '', password: '', isLoading: false, showLoginButton: true,
              textBoxEditable: true };

              resetState() {
                this.setState({isLoading: false});
                this.setState({showLoginButton: true});
                this.setState({textBoxEditable: true});
              }
   onButtonPress() {
      const { email, password } = this.state;
      this.setState({ error: '', loading: true });
      console.log('email:');
      console.log(email);
      console.log(password);
      if (this.state.isLoading == false){
        this.setState({showLoginButton: false,textBoxEditable: false,isLoading: true});
        
      }
        //login this.props.navigation.navigate('LoggedInUser', /*{ email: email }*/)
        firebase.auth().signInWithEmailAndPassword(email.trim(), password)
        .then(() => {
          this.props.navigation.navigate('LoggedInUser',{email: email})
          this.resetState()
      })
        .catch( () => {Alert.alert('Invalid Credentials') 
        this.setState({ email: '', password: ''})
        this.resetState()
      }
      )

   }
    
  render() {
    console.log('previous');
    return (
      <View style={{ backgroundColor: Color.viewBackgroundColor, flex: 1,}}>
          <CardSection>
            <Text style={{ width: 100, color: 'white', fontSize: 20, marginTop: 100  }}> Email: </Text>
            <TextInput
            autoCorrect={false}
            autoCapitalize='none'
            value={this.state.email}
            placeholderTextColor='white'
            keyboardType={'email-address'}
            editable={this.state.textBoxEditable}
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
              editable={this.state.textBoxEditable}
              placeholder={'Enter Password'}
              placeholderTextColor={'white'}
              value={this.state.password}
              onChangeText={password => this.setState({ password  })}
              style={{ marginLeft:5, width: 160, fontSize: 16 ,height: 22, marginTop: 20, marginRight: 20, color: 'white', }}
              />
        </CardSection>
        <Text style={{ color: 'red', fontSize: 20 }}> {this.state.error}
        </Text>
        <View style={{ height: 60, alignItems: 'center' }}>
        {
          this.state.showLoginButton? <Button onPress={this.onButtonPress.bind(this)}
          backgroundColorValue={'#8EC663'} 
          colorValue={'white'}
          textValue={'Log In'}
          /> :  <ActivityIndicator size={'small'} />
        }
        </View>
      </View>

    );
  };
}

export default Login;

