import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TransactionsScreen from '../screens/TransactionsScreen';

export type TransactionsStackParamList = {
  Transactions: undefined;
};

const Stack = createNativeStackNavigator<TransactionsStackParamList>();

const TransactionsStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerBackTitle: 'Back',
      }}
    >
      <Stack.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={{
          headerTitle: 'Transactions',
        }}
      />
    </Stack.Navigator>
  );
};

export default TransactionsStack;
