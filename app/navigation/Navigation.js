import SignIn from '../features/sign-in/components/SignIn';
import SignUp from '../features/sign-up/components/SignUp';
import BasicInfo from '../features/sign-up/components/BasicInfo';
import BasicInfo1 from '../features/sign-up/components/BasicInfo1';
import Home from '../features/Home/Home';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';


import React from "react";
import { Platform } from "react-native";
import { Icon } from "react-native-elements";
import {
  createSwitchNavigator,
  StackViewTransitionConfigs,
} from "react-navigation";
const IOS_MODAL_ROUTES = ["OptionsScreen"];

let dynamicModalTransition = ( transitionProps, prevTransitionProps ) => {
  return StackViewTransitionConfigs.defaultTransitionConfig(
    transitionProps,
    prevTransitionProps,
    IOS_MODAL_ROUTES.some(
      screenName =>
        screenName === transitionProps.scene.route.routeName ||
        (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName)
    )
  );
};

const HomeStack = createStackNavigator(
  {Home },
  { initialRouteName: "Home", transitionConfig: dynamicModalTransition }
);


HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  let drawerLockMode = "unlocked";
  if (navigation.state.index > 0) {
    drawerLockMode = "locked-closed";
  }

  return {
    tabBarLabel: homeStrings.homeTitle,
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" type="ionicon" color={tintColor} />
    ),
    tabBarVisible,
    drawerLockMode,
    drawerLabel: homeStrings.homeTitle,
    drawerIcon: ({ tintColor }) => (
      <Icon name="md-home" type="ionicon" color={tintColor} />
    )
  };
};

const MainNavigator = Platform.select({
  ios: createBottomTabNavigator({ HomeStack }),
  android: createDrawerNavigator({ HomeStack }, {})
});

const LoginStack = createStackNavigator({ SignIn, SignUp, BasicInfo, BasicInfo });

LoginStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarLabel: loginStrings.loginTitle,
    tabBarIcon: ({ tintColor }) => {
      let iconName = Platform.select({ ios: "ios-log-in", android: "md-log-in" });
      return <Icon name={iconName} type="ionicon" color={tintColor} />;
    },
    tabBarVisible
  };
};

const AuthTabs = createBottomTabNavigator({ LoginStack });

const RootSwitch = createSwitchNavigator({ AuthTabs, MainNavigator });


const Container = createAppContainer(RootSwitch);


export default Container;
