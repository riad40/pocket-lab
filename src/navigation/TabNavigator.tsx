import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeStack from './HomeStack';
import TransactionsStack from './TransactionsStack';
import StatsStack from './StatsStack';
import SettingsStack from './SettingsStack';

export type TabParamList = {
  HomeTab: undefined;
  TransactionsTab: undefined;
  StatsTab: undefined;
  SettingsTab: undefined;
};

export type RootStackParamList = {
  Tabs: undefined;
};

export type TabScreenProps<T extends keyof TabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;

const Tab = createBottomTabNavigator<TabParamList>();

interface TabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}

const getTabBarIcon = (routeName: keyof TabParamList) => {
  return ({ focused, color, size }: TabBarIconProps) => {
    let iconName: string = 'home';

    switch (routeName) {
      case 'HomeTab':
        iconName = focused ? 'home' : 'home-outline';
        break;
      case 'TransactionsTab':
        iconName = focused ? 'swap-vertical' : 'swap-vertical-outline';
        break;
      case 'StatsTab':
        iconName = focused ? 'stats-chart' : 'stats-chart-outline';
        break;
      case 'SettingsTab':
        iconName = focused ? 'settings' : 'settings-outline';
        break;
    }

    return <Icon name={iconName} size={size} color={color} />;
  };
};

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#999',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          title: 'Home',
          tabBarIcon: getTabBarIcon('HomeTab'),
        }}
      />
      <Tab.Screen
        name="TransactionsTab"
        component={TransactionsStack}
        options={{
          title: 'Transactions',
          tabBarIcon: getTabBarIcon('TransactionsTab'),
        }}
      />
      <Tab.Screen
        name="StatsTab"
        component={StatsStack}
        options={{
          title: 'Stats',
          tabBarIcon: getTabBarIcon('StatsTab'),
        }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsStack}
        options={{
          title: 'Settings',
          tabBarIcon: getTabBarIcon('SettingsTab'),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
