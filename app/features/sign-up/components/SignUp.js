import React from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class SignUp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render(){
    return (
      <View style={styles.container}>
      <View style={styles.textWrapper}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Mobile"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />

        <Button title="Continue" onPress={() => this.props.navigation.navigate('BasicInfo')}></Button>
      </View>
    </View>
    );
  }
}

export default SignUp;

const styles = StyleSheet.create({
  container: { flex: 1 },
  textWrapper: {
    height: hp('70%'), // 70% of height device screen
    width: wp('80%'),   // 80% of width device screen
    marginLeft: wp('10%'),
    marginTop: wp('40%')
  },
  textInput: {
    height: 55,
    borderWidth : 1,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 10,
    padding: 10
  }
});