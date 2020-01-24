import React from 'react';
import { TextInput, StyleSheet, Text, View, Button } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>Home</Text>
    </View>
    );
  }
}

export default Home;
