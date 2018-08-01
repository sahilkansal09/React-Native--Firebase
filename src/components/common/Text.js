import React from 'react';
import { Text } from 'react-native';


const TextValue = (props) => {
    return(
        <Text
        style= {{
            fontSize: 35,
            color: 'white',
        }}
        >  { props.textValue } </Text>
    );
}
export default TextValue;


