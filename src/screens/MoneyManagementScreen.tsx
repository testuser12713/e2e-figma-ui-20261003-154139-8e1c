import { Ionicons } from '@expo/vector-icons';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type { MainTabParamList, RootStackParamList } from '../navigation/types';
import { useTransactions } from '../store/transactions';
import { colors, fonts, radii, spacing, typography } from '../theme';

type Props = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Money'>,
  NativeStackScreenProps<RootStackParamList>
>;

const CATEGORY_TILES: { label: string; icon: keyof typeof Ionicons.glyphMap }[] = [
  { label: 'Home', icon: 'home-outline' },
  { label: 'Food', icon: 'restaurant-outline' },
  { label: 'Work', icon: 'briefcase-outline' },
  { label: 'Friends', icon: 'people-outline' },
  { label: 'Shop', icon: 'bag-outline' },
  { label: 'Car', icon: 'car-outline' },
];

function formatAmount(value: number): string {
  return `${value.toFixed(2)}€`;
}

export default function MoneyManagementScreen({ navigation }: Props) {
  const { transactions } = useTransactions();

  return (
    <View style={styles.container} testID="money-screen">
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.hero}>
          <Image
            source={require('../../design/figma/assets/illustration-525x387.png')}
            style={styles.heroIllustration}
            resizeMode="cover"
          />
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>R</Text>
          </View>
          <Text style={styles.eyebrow}>MontHly EXPENSES</Text>
          <Text style={styles.heroAmount}>1,345.00€</Text>
        </View>

        <View style={styles.categoriesCard}>
          <Text style={styles.categoriesTitle}>Quick Categories</Text>
          <View style={styles.categoriesGrid}>
            {CATEGORY_TILES.map((cat) => (
              <View key={cat.label} style={styles.categoryTile}>
                <Ionicons name={cat.icon} size={30} color={colors.textStrong} />
              </View>
            ))}
          </View>
        </View>

        {transactions.map((item) => (
          <Pressable
            key={item.id}
            testID={`transaction-${item.id}`}
            accessibilityRole="button"
            accessibilityLabel={item.name}
            onPress={() =>
              navigation.navigate('MoneyDetail', { transactionId: item.id })
            }
            style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
          >
            <View style={styles.rowText}>
              <Text style={styles.rowName}>{item.name}</Text>
              <Text style={styles.rowDate}>{item.date}</Text>
            </View>
            <Text style={styles.rowAmount}>{formatAmount(item.amount)}</Text>
          </Pressable>
        ))}
      </ScrollView>

      <Pressable
        testID="money-add-button"
        accessibilityRole="button"
        accessibilityLabel="Add Expense"
        onPress={() => navigation.navigate('MoneyAdd')}
        style={({ pressed }) => [styles.fab, pressed && styles.fabPressed]}
      >
        <Ionicons name="add" size={30} color={colors.onAccent} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgAlt,
  },
  scroll: {
    paddingBottom: spacing.s6,
  },
  hero: {
    height: 406,
    backgroundColor: colors.surface,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    paddingHorizontal: 49,
    paddingBottom: spacing.s4,
  },
  heroIllustration: {
    position: 'absolute',
    top: -74,
    left: -73,
    width: 525,
    height: 387,
  },
  avatar: {
    position: 'absolute',
    top: 77,
    right: 67,
    width: 51,
    height: 51,
    borderRadius: radii.pill,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontFamily: fonts.display,
    fontSize: 32,
    lineHeight: 41,
    color: colors.onAccent,
  },
  eyebrow: {
    ...typography.eyebrow,
    color: colors.textStrong,
  },
  heroAmount: {
    ...typography.heroNumber,
    color: colors.textStrong,
  },
  categoriesCard: {
    marginHorizontal: 45,
    marginTop: spacing.s5,
    backgroundColor: colors.surface,
    borderRadius: radii.card,
    paddingVertical: spacing.s3,
    paddingHorizontal: spacing.s3,
  },
  categoriesTitle: {
    ...typography.eyebrow,
    color: colors.textStrong,
    textAlign: 'center',
    marginBottom: spacing.s3,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryTile: {
    width: 55,
    height: 55,
    borderRadius: radii['2xl'],
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.textStrong,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.s2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: spacing.s3,
    marginTop: spacing.s1,
    paddingVertical: spacing.s2,
    paddingHorizontal: spacing.s2,
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
  },
  rowPressed: {
    backgroundColor: colors.bg,
  },
  rowText: {
    flex: 1,
  },
  rowName: {
    ...typography.body,
    color: colors.textStrong,
  },
  rowDate: {
    ...typography.caption,
    color: colors.muted,
  },
  rowAmount: {
    fontFamily: fonts.bodyThin,
    fontSize: 14,
    lineHeight: 18,
    color: colors.textStrong,
  },
  fab: {
    position: 'absolute',
    right: spacing.s3,
    bottom: spacing.s3,
    width: 56,
    height: 56,
    borderRadius: radii.pill,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.16,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  fabPressed: {
    opacity: 0.85,
  },
});
