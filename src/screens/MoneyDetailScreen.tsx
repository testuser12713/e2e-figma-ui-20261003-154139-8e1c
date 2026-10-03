import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type { RootStackParamList } from '../navigation/types';
import { useTransactions, type Transaction } from '../store/transactions';
import { colors, fonts, radii, spacing, typography } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'MoneyDetail'>;

const CATEGORY_ILLUSTRATIONS: Record<string, number> = {
  movie: require('../../design/figma/assets/illustration-53x53.png'),
  coffee: require('../../design/figma/assets/illustration-53x53-2.png'),
  shop: require('../../design/figma/assets/illustration-53x53-3.png'),
};

const DEFAULT_ILLUSTRATION = require('../../design/figma/assets/illustration-53x53-4.png');

function formatAmount(value: number): string {
  return `${value.toFixed(2)}€`;
}

export default function MoneyDetailScreen({ route, navigation }: Props) {
  const { transactionId } = route.params;
  const { transactions } = useTransactions();

  const groups = transactions.reduce<Record<string, Transaction[]>>(
    (acc, transaction) => {
      const key = transaction.date;
      const list = acc[key] ?? [];
      list.push(transaction);
      acc[key] = list;
      return acc;
    },
    {},
  );
  const dates = Object.keys(groups);

  return (
    <View style={styles.container} testID="money-detail-screen">
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <Pressable
            testID="money-detail-back"
            accessibilityRole="button"
            accessibilityLabel="Back"
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Image
              source={require('../../design/figma/assets/icon-32x32.png')}
              style={styles.backIcon}
            />
          </Pressable>
          <Text style={styles.title}>weekly report</Text>
        </View>

        <View style={styles.legend}>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: colors.accent }]} />
            <Text style={styles.legendLabel}>expenses</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: colors.deposit }]} />
            <Text style={styles.legendLabel}>deposit</Text>
          </View>
        </View>

        {dates.map((date) => (
          <View key={date} style={styles.dayGroup}>
            <Text style={styles.dayLabel}>{date}</Text>
            {groups[date].map((transaction) => {
              const selected = transaction.id === transactionId;
              return (
                <View
                  key={transaction.id}
                  testID={`detail-transaction-${transaction.id}`}
                  style={[styles.row, selected && styles.rowSelected]}
                >
                  <Image
                    source={
                      CATEGORY_ILLUSTRATIONS[transaction.category ?? ''] ??
                      DEFAULT_ILLUSTRATION
                    }
                    style={styles.rowIllustration}
                  />
                  <View style={styles.rowText}>
                    <Text style={styles.rowCategory}>
                      {transaction.category ?? ''}
                    </Text>
                    <Text style={styles.rowName}>{transaction.name}</Text>
                    <Text style={styles.rowDate}>{transaction.date}</Text>
                  </View>
                  <Text style={styles.rowAmount}>
                    {formatAmount(transaction.amount)}
                  </Text>
                </View>
              );
            })}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgAlt,
  },
  scroll: {
    paddingBottom: spacing.s4,
  },
  header: {
    height: 138,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: spacing.s2,
  },
  backButton: {
    position: 'absolute',
    left: 12,
    top: 32,
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: 32,
    height: 32,
    tintColor: colors.chevron,
  },
  title: {
    fontFamily: fonts.bodyThin,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 2.8,
    textTransform: 'uppercase',
    color: colors.textStrong,
  },
  legend: {
    flexDirection: 'row',
    marginTop: spacing.s2,
    marginBottom: spacing.s1,
    paddingHorizontal: spacing.s4,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: spacing.s6,
  },
  legendDot: {
    width: 13,
    height: 13,
    borderRadius: radii.sm,
    marginRight: spacing.s1,
  },
  legendLabel: {
    fontFamily: fonts.bodyThin,
    fontSize: 9,
    lineHeight: 11,
    textTransform: 'uppercase',
    color: colors.textStrong,
  },
  dayGroup: {
    marginTop: spacing.s1,
  },
  dayLabel: {
    ...typography.caption,
    color: colors.muted,
    paddingHorizontal: spacing.s4,
    marginBottom: spacing.s0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.s2,
    paddingHorizontal: spacing.s3,
  },
  rowSelected: {
    backgroundColor: colors.surfaceSubtle,
  },
  rowIllustration: {
    width: 53,
    height: 53,
  },
  rowText: {
    flex: 1,
    marginLeft: spacing.s2,
  },
  rowCategory: {
    fontFamily: fonts.bodyThin,
    fontSize: 9,
    lineHeight: 11,
    letterSpacing: 1.8,
    textTransform: 'uppercase',
    color: colors.textStrong,
  },
  rowName: {
    ...typography.caption,
    color: colors.textStrong,
  },
  rowDate: {
    fontFamily: fonts.bodyThin,
    fontSize: 9,
    lineHeight: 11,
    textTransform: 'uppercase',
    color: colors.textStrong,
  },
  rowAmount: {
    fontFamily: fonts.bodyThin,
    fontSize: 14,
    lineHeight: 18,
    color: colors.textStrong,
  },
});
