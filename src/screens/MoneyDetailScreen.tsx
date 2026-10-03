import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import type { RootStackParamList } from '../navigation/types';
import { useTransactions } from '../store/transactions';
import { colors, spacing, typography } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'MoneyDetail'>;

export default function MoneyDetailScreen({ route }: Props) {
  const { transactionId } = route.params;
  const { transactions } = useTransactions();
  const transaction = transactions.find((t) => t.id === transactionId);

  return (
    <View style={styles.container} testID="money-detail-screen">
      <Text style={styles.title}>Transaction</Text>
      <Text style={styles.body}>
        {transaction ? transaction.name : transactionId}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgAlt,
    padding: spacing.s3,
  },
  title: {
    ...typography.titleLg,
    color: colors.fg,
    marginBottom: spacing.s2,
  },
  body: {
    ...typography.body,
    color: colors.textStrong,
  },
});
