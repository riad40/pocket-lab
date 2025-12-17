import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StatsScreen from '../screens/StatsScreen';

export type StatsStackParamList = {
  Stats: undefined;
};

const Stack = createNativeStackNavigator<StatsStackParamList>();

const StatsStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerBackTitle: 'Back',
      }}
    >
      <Stack.Screen
        name="Stats"
        component={StatsScreen}
        options={{
          headerTitle: 'Statistics',
        }}
      />
    </Stack.Navigator>
  );
};

export default StatsStack;
