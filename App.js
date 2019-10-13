/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MyCart from "./src/containers/MyCart";

const AppNavigator = createStackNavigator({
  MyCart: {
    screen: MyCart,
  },
});

export default createAppContainer(AppNavigator);
