import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import type { RootStackParamList } from '../navigation/types';
import { useTransactions } from '../store/transactions';
import { colors, fonts, radii, spacing, typography } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'MoneyAdd'>;

const DAY_NAMES = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

function defaultDate(): string {
  const now = new Date();
  return `${String(now.getDate()).padStart(2, '0')}- ${DAY_NAMES[now.getDay()]}`;
}

export default function MoneyAddScreen({ navigation }: Props) {
  const { addTransaction } = useTransactions();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(defaultDate);
  const [amount, setAmount] = useState('');

  const handleAdd = () => {
    const parsedAmount = Number.parseFloat(amount.replace(',', '.'));
    if (!name.trim() || Number.isNaN(parsedAmount)) {
      return;
    }
    addTransaction({
      name: name.trim(),
      description: description.trim() || undefined,
      amount: parsedAmount,
      date: date.trim() || defaultDate(),
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container} testID="money-add-screen">
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <Pressable
            testID="money-add-back"
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
          <Text style={styles.title}>Add ExPense</Text>
        </View>

        <TextInput
          testID="money-add-name"
          accessibilityLabel="Name"
          placeholder="Name"
          placeholderTextColor={colors.textStrong}
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          testID="money-add-description"
          accessibilityLabel="Beschreibung"
          placeholder="Beschreibung"
          placeholderTextColor={colors.textStrong}
          value={description}
          onChangeText={setDescription}
          style={styles.input}
        />
        <TextInput
          testID="money-add-amount"
          accessibilityLabel="Amount"
          placeholder="Amount"
          placeholderTextColor={colors.textStrong}
          value={amount}
          onChangeText={setAmount}
          keyboardType="decimal-pad"
          style={styles.input}
        />
        <TextInput
          testID="money-add-date"
          accessibilityLabel="Select Date"
          placeholder="Select Date"
          placeholderTextColor={colors.textStrong}
          value={date}
          onChangeText={setDate}
          style={styles.input}
        />

        <Pressable
          testID="money-add-submit"
          accessibilityRole="button"
          accessibilityLabel="Add Expense"
          onPress={handleAdd}
          style={({ pressed }) => [styles.submit, pressed && styles.submitPressed]}
        >
          <Text style={styles.submitLabel}>Add Expense</Text>
        </Pressable>
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
  input: {
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    paddingHorizontal: spacing.s2,
    paddingVertical: spacing.s2,
    marginHorizontal: spacing.s4,
    marginTop: spacing.s3,
    ...typography.body,
    color: colors.textStrong,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  submit: {
    backgroundColor: colors.accent,
    borderRadius: radii.lg,
    paddingVertical: spacing.s2,
    alignItems: 'center',
    marginHorizontal: spacing.s4,
    marginTop: spacing.s6,
  },
  submitPressed: {
    opacity: 0.85,
  },
  submitLabel: {
    ...typography.body,
    color: colors.onAccent,
  },
});
