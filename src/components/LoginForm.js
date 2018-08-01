import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text, TextInput } from 'react-native';
import { Button, CardSection, Spinner } from './common';

class LoginForm extends Component{
  state = { email: '', password: '', error: '', loading: false };

// onButtonPress() {
//   const { email, password } = this.state;
//   this.setState({ error: '', loading: true });
//   console.log(email);
//   this.props.navigation.navigate('LoggedInUser');

//  firebase.auth().signInWithEmailAndPassword(email, password)
//   .then(this.onLoginSuccess.bind(this))
//   .catch( () => {
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then(this.onLoginSuccess.bind(this))
//     .catch(this.onLoginFail.bind(this));
//   });

/*  firebase.database().ref('data').push({
    email: email, pass: password
  })*/
 /*console.log('outer');
  firebase.database().ref('data').once('value',function(snap){
    console.log(snap.val())

    // snapshot.forEach(function(childSnapshot) {
    //   var childKey = childSnapshot.key;
    //   var childData = childSnapshot.val();
    //   console.log(childData.email);
    // });
  })*/

// }

// onLoginFail() {
//     this.setState( {
//       error: 'authentication failed',
//       loading: false
//     });
// }

// onLoginSuccess() {
//   this.setState( {
//     email: '',
//     password: '',
//     loading: 'false',
//     error: ''
//   } );
//   {this.renderButton()}
// }
// renderButton(){
//       // if (this.state.loading == true){
//       //   return <Spinner size={'small'} />;
//       // }
//       return (
       
         
//       );
//   }
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
