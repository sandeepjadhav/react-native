import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import SignIn from './app/features/sign-in/components/SignIn';
import SignUp from './app/features/sign-up/components/SignUp';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
    SignIn: {
      screen: SignIn
    },
    SignUp: {
      screen: SignUp
    },
},{
  initialRouteName: 'SignIn'
});

const AppContainer = createAppContainer(MainNavigator);


class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { navigate } = this.props.navigation;

    return( 
      <React.Fragment>
        <AppContainer style={styles.container}/>
        <View>
            <Button title="Sign Up" onPress={() => navigate('SingUp')}></Button>
            <Button title="SIgn In" onPress={() => navigate('SignIn')}></Button>
        </View>
      </React.Fragment>
      )
  }
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