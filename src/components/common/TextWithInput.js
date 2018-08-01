import React from 'react';
import { Text, TextInput, View } from 'react-native';

const TextWithInput = (props) => {
    return(
        <View style= {styles.container}>
            <Text style={styles.text}>{props.textValue}</Text>
            <TextInput style={styles.textInput} editable />
        </View>
    );
}
export default TextWithInput;

const styles = {
    container: {
        height: 40,
        // borderColor: 'red',
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    text: {
        flex: 1,
        // borderColor: 'red',
        // borderWidth: 1,
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    textInput: {
        borderColor: 'white',
        borderWidth: 1,
        flex: 2,
        fontSize: 16,
        color: 'white',
        marginRight: 20,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0
        
    }
}