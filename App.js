import React, { Component } from 'react';
import Orientation, { orientation } from "react-native-orientation";

import { StyleSheet, Text, View, Button } from 'react-native';

import SignIn from './app/features/sign-in/components/SignIn';
import SignUp from './app/features/sign-up/components/SignUp';
import BasicInfo from './app/features/sign-up/components/BasicInfo';
import BasicInfo1 from './app/features/sign-up/components/BasicInfo1';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// const MainNavigator = createStackNavigator({
//     SignIn: {
//       screen: SignIn
//     },
//     SignUp: {
//       screen: SignUp
//     },
//     BasicInfo: {
//       screen: BasicInfo
//     },
//     BasicInfo1: {
//       screen: BasicInfo1
//     },
// },{
//   initialRouteName: 'SignIn',
//    headerMode: 'none'
// });

// const AppContainer = createAppContainer(MainNavigator);

import Container from "./app/navigation/Navigation";

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount = () => {
    Orientation.lockToPortrait();
  };
  render() {
    return <Container />;
  }

  // render() {
  //   // const { navigate } = this.props.navigation;

  //   return(
  //     <React.Fragment>
  //       <AppContainer style={styles.container} navigation={this.props.navigation}/>
  //       {/* <View>
  //           <Button
  //             title="Sign Up"
  //             onPress={() => this.props.navigation.navigate('SignUp')}
  //             ></Button>
  //           <Button title="SIgn In" ></Button>
  //       </View> */}
  //     </React.Fragment>
  //     )
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;