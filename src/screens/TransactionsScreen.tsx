import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TransactionsStackParamList } from '../navigation/TransactionsStack';

type Props = NativeStackScreenProps<TransactionsStackParamList, 'Transactions'>;

const TransactionsScreen: React.FC<Props> = ({ navigation }) => {
  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Transactions',
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Transactions Screen</Text>
      <Text style={styles.subtitle}>View and manage your transactions</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

export default TransactionsScreen;
