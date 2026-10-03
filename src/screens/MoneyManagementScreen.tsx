import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import type { MainTabParamList } from '../navigation/types';
import { useTransactions } from '../store/transactions';
import { colors, radii, spacing, typography } from '../theme';

type Props = BottomTabScreenProps<MainTabParamList, 'Money'>;

export default function MoneyManagementScreen(_props: Props) {
  const { transactions } = useTransactions();

  return (
    <View style={styles.container} testID="money-screen">
      <Text style={styles.title}>Money Management</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row} testID={`transaction-${item.id}`}>
            <Text style={styles.rowName}>{item.name}</Text>
            <Text style={styles.rowAmount}>{item.amount}€</Text>
          </View>
        )}
      />
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    padding: spacing.s2,
    marginBottom: spacing.s1,
  },
  rowName: {
    ...typography.body,
    color: colors.textStrong,
  },
  rowAmount: {
    ...typography.body,
    color: colors.textStrong,
  },
});
