import React, { Component } from 'react';
import { View } from 'react-native';
import TextValue from '../components/common/Text';
import { Button } from '../components/common';
import firebase from 'firebase';
import Color from '../Utilities/Strings';
import firebaseValues from '../config/Sample';

class Home extends Component {
    componentWillMount() {
        // Initialize Firebase
        firebase.initializeApp({
            apiKey: "AIzaSyADXYaKaeNDWJNJRqBtyBLDdCYtM3DvPSg",
            authDomain: "authentication-f72f9.firebaseapp.com",
            databaseURL: "https://authentication-f72f9.firebaseio.com",
            projectId: "authentication-f72f9",
            storageBucket: "",
            messagingSenderId: "975468385136"
        });
    }

    handleLogin = () => {
        console.log('login button pressed');
        //  SampleValue is a class
        firebaseValues.value();
        this.props.navigation.navigate('Login');
    }

    handleSignUp = () => {
        console.log('SignUp button pressed');
        this.props.navigation.navigate('SignUp');
    }

    render() {
        return (
            <View style={{ backgroundColor: Color.viewBackgroundColor, flex: 1 }}>
                <View style={{ alignItems: 'center', marginTop: 80 }} >
                    <TextValue
                        textValue='Welcome User'
                    />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50, height: 140, alignItems: 'center' }}>
                    <Button
                        backgroundColorValue={'#8EC663'}
                        colorValue={'white'}
                        textValue={'Login'}
                        onPress={() => this.handleLogin()}
                    />
                    <Button
                        backgroundColorValue={'#70A8DF'}
                        colorValue={'white'}
                        textValue={'Sign up'}
                        onPress={() => this.handleSignUp()}
                    />
                </View>
            </View>
        );
    }
}
export default Home;