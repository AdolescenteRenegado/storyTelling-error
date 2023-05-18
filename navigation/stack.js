import React, { Component } from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomTabNavigator } from "./tabnavigator";
import StoryScreen from "../screens/storyScreen";
const Stack = createStackNavigator();

export default class StackNavigator extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="home" component={BottomTabNavigator} />
        <Stack.Screen name="storyScreen" component={StoryScreen} />
      </Stack.Navigator>
    );
  }
}
