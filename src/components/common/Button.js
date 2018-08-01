import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {

return (
  <TouchableOpacity 
  onPress={ props.onPress } 
  style={{
    // flex: 1,
    justifyContent: 'center',
    backgroundColor: props.backgroundColorValue,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    width: 250,
    marginTop: 10,
    height: 50,
    alignItems: 'center',
  }}>
  <Text style={{
        alignSelf: 'center',
        color: props.colorValue,
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
  }}> { props.textValue } </Text>
  </TouchableOpacity>
  );
};

export { Button };

