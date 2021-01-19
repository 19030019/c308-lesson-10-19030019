import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import AddExpenseScreen from './screens/AddExpenseScreen.js';
import ViewExpenseScreen from './screens/ViewExpenseScreen.js';

const Stack = createStackNavigator();

const SpenseApp: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Add Expense" component={AddExpenseScreen} />
        <Stack.Screen name="View Expense" component={ViewExpenseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default SpenseApp;
