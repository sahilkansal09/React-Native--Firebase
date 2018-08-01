import React, { Component } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import Color from '../Utilities/Strings';
import { Button } from '../components/common/Button';
import firebase from 'firebase';
// import FirebaseStart from '../config/Firebase';
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: ''
        }
    }

    signUpUser() {
        const { email, password } = this.state;
        console.log('button pressed');
        //console.log(email);
        //console.log(password);
        if (email == ''){
            Alert.alert('Enter Email');
        }
        else if (password == ''){
            Alert.alert('Enter Password');
        }
        else {
            firebase.auth().createUserWithEmailAndPassword(email.trim(), password)
            .then( () => {
                firebase.database().ref('data').push(
                    {
                        name: '',
                        contactNo: '',
                        email: this.state.email,
                    }
                ).then(() => Alert.alert('Successfully Inserted'))
                .catch(console.log('error'))
                // Alert.alert('Successfully Registered')
                
                this.props.navigation.navigate('Home')
            }
            )
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
        }
    }


    render() {
        return(
            <View style={{ backgroundColor: Color.viewBackgroundColor, flex: 1}}>
                
                <View style={{marginTop: 80, flexDirection: 'row'}}>
                    <Text style={{ flex: 1, color: 'white', fontSize: 20, marginLeft: 20}} >Email: </Text>
                    <TextInput style={{ flex: 2, borderBottomWidth: 1, borderColor: 'white', color: 'white', marginRight: 20}}
                    editable
                    autoCapitalize='none'
                    onChangeText={ email => this.setState({ email })}
                    value={this.state.email}
                    /> 
                </View>
                <View style={{marginTop: 10, flexDirection: 'row', }}>
                    <Text style={{ flex: 1, color: 'white', fontSize: 20, marginLeft: 20}}>Password:</Text>
                   <TextInput style={{ flex: 2, borderBottomWidth: 1, borderColor: 'white', marginRight: 20, color: 'white'}}
                     editable
                     autoCapitalize='none'
                    secureTextEntry={true}
                    onChangeText={ password => this.setState({ password })}
                    value={this.state.password}
                    /> 
                
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20}} >
                    <Button 
                    backgroundColorValue={'#70A8DF'}
                    textValue={'Sign up'}
                    colorValue={'white'}
                    onPress={this.signUpUser.bind(this)}
                    />
                </View>
            </View>
        );
    }
}

export default SignUp;