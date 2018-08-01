import React from 'react';
import {StackNavigator} from 'react-navigation';
import { Button, Alert } from 'react-native';
import Home from '../screens/Home';
import Login from '../screens/login';
import SignUp from '../screens/signUp';
 import LoggedInUser from '../screens/LoggedInUser';


export default StackNavigator({
    Home: {
         screen: Home,
        navigationOptions: {
            headerTitle: 'Authentication'
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login' 
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: 'Sign Up',
            
        }
    },
    LoggedInUser: {
        screen: LoggedInUser, 
        navigationOptions: () => ({
            headerLeft: null
        })
    },
});