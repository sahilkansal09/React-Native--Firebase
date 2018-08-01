import React from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import Color from '../Utilities/Strings';
import { Button } from '.././components/common';
import firebase from 'firebase';

class LoggedInUser extends React.Component {

    constructor(props) {
        super(props);
        
    }
    state = { setEmail: '', name: '', contactNo: '', textEditable: false, bottomWidthValue: 0, showUpdateButton: false}

    static navigationOptions = ({navigation}) => {
    return {
        headerTitle: 'User LoggedIn',
        headerRight: (
            <TouchableOpacity onPress={navigation.getParam('onButtonEdit')}>
            <Text style={{ fontSize: 18}}>Edit</Text>
            </TouchableOpacity>),
        };
    };

    _onButtonEdit = () => {
        console.log('pressed');  
        this.setState({bottomWidthValue: 1, textEditable: true, showUpdateButton: true})
    }
    componentDidMount() {
        this.props.navigation.setParams({onButtonEdit: this._onButtonEdit})
    }
    
    componentWillMount() {
        const { email } = this.props.navigation.state.params;
        this.setState({ setEmail: (email)})
        console.log('passed email: ',email);
        console.log('ok');
        
        firebase.database().ref('data').orderByChild("email").equalTo(email).
        limitToFirst(1).on('value',(snapshot)=>{
            console.log('fetching data');
            
            snapshot.forEach((snap)=>{
                this.setState({ name: snap.toJSON().name, contactNo:snap.toJSON().contactNo })
            });
      })   
    }

    onLogoutButtonPress() {
        console.log('logout successfully');
        firebase.auth().signOut();
        this.props.navigation.navigate('Home');     
    }
    onUpdateButtonPress() {
        // saving data 
        /*console.log('ok');
        console.log('name:',this.state.name);
        console.log('contact no:',this.state.contactNo);
        firebase.database().ref('data').push(
            {
                name: this.state.name,
                contactNo: this.state.contactNo,
                email: this.state.setEmail,
            }
        ).then(() => Alert.alert('Successfully Updated'))
        .catch(console.log('error'))*/

        // update data
        console.log('updating data', this.state.setEmail);
        console.log('name:',this.state.name);

        console.log('contact no:',this.state.contactNo);
        let reference = firebase.database().ref('data').orderByChild("email").equalTo(this.state.setEmail).
        limitToFirst(1)
        reference.on('value',this.onObserverListChange)
    }


    onObserverListChange = (snapshot)=>{
        // let objectToUpdate = snapshot.toJSON()
        // objectToUpdate.name = "Hi Sahil"
        // console.log(JSON.stringify(objectToUpdate));
        
       snapshot.forEach(snap=>{
           let object = snap.toJSON()
            object.name = this.state.name
            object.contactNo = this.state.contactNo
            snap.ref.update(object)
       })

  }

    componentWillUnmount() {
        firebase.database().ref('data').off('value',null,this)
    }
    render() {
     return(
                <View style={{ backgroundColor: Color.viewBackgroundColor, flex: 1,}}>
                    <View style={{ marginTop: 80, flexDirection: 'row',  marginRight: 20}}>
                        <Text style={{ flex: 1, color: 'white', fontSize: 20, marginLeft: 40, fontSize: 20  }}> 
                            Email:
                        </Text>
                            <TextInput
                                editable={false}
                                value={this.state.setEmail}
                                style={{ 
                                flex: 2,
                                color:'white',
                                fontSize: 16 ,
                                // borderBottomWidth: 1,
                                borderColor: 'white',
                               }}
                            />            
                    </View>
                    <View style={{ marginTop: 20, flexDirection: 'row',  marginRight: 20}}>
                        <Text style={{ flex: 1, color: 'white', fontSize: 20, marginLeft: 40, fontSize: 20  }}> 
                            Name:
                        </Text>
                            <TextInput
                                editable={this.state.textEditable}
                                autoCorrect={false}
                                autoCapitalize={'none'}
                                onChangeText={name => this.setState({name})}
                                value= {this.state.name}
                                style={{ 
                                flex: 2,
                                color:'white',
                                fontSize: 16 ,
                                borderBottomWidth: this.state.bottomWidthValue,
                                borderColor: 'white',
                                
                               }}
                            />            
                    </View>
                    <View style={{ marginTop: 20, flexDirection: 'row',  marginRight: 20}}>
                        <Text style={{ flex: 1, color: 'white', fontSize: 20, marginLeft: 40, fontSize: 20  }}> 
                            Contact No.:
                        </Text>
                            <TextInput
                                editable={this.state.textEditable}
                                autoCorrect={false}
                                autoCapitalize={'none'}
                                onChangeText={contactNo => this.setState({contactNo})}
                                value= {this.state.contactNo}
                                keyboardType={'number-pad'}
                                style={{ 
                                flex: 2,
                                color:'white',
                                fontSize: 16 ,
                                borderBottomWidth: this.state.bottomWidthValue,
                                borderColor: 'white',
                               }}
                            />            
                    </View>
                    
                    <View style={{ marginTop: 50, alignItems: 'center'}}> 
                    {
                            (this.state.showUpdateButton == true) ?  <Button 
                            onPress={this.onUpdateButtonPress.bind(this)}
                            backgroundColorValue={'#8EC663'}
                            colorValue={'white'}
                            textValue={'Update'}
                            /> : null
                        }
                        
                    </View>
                    <View style={{ marginTop: 10, alignItems: 'center'}}> 
                        <Button 
                            onPress={this.onLogoutButtonPress.bind(this)}
                            backgroundColorValue={'#8EC663'}
                            colorValue={'white'}
                            textValue={'Logout'}
                            /> 
                        
                    </View>
                </View>
            );
    }        
}

export default LoggedInUser;