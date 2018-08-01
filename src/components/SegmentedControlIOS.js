import React from 'react';
import { View, SegmentedControlIOS } from 'react-native';

const SegmentControlComponentValue = () => {
  this.state = { age: 10 }
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex:1, marginTop: 30}}>
      <SegmentedControlIOS
        values={['Male', 'Female', 'Third']}
        selectedIndex={2}
        tintColor={'green'}
        style={{
        width: 150
         }}
     />
  </View>
  );
};

export default SegmentControlComponentValue;
