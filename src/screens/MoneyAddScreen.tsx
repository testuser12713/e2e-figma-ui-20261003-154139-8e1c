import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import type { RootStackParamList } from '../navigation/types';
import { useTransactions } from '../store/transactions';
import { colors, radii, spacing, typography } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'MoneyAdd'>;

export default function MoneyAddScreen({ navigation }: Props) {
  const { addTransaction } = useTransactions();
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleAdd = () => {
    const parsedAmount = Number.parseFloat(amount.replace(',', '.'));
    if (!name.trim() || Number.isNaN(parsedAmount)) {
      return;
    }
    addTransaction({
      name: name.trim(),
      amount: parsedAmount,
      date: new Date().toISOString().slice(0, 10),
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container} testID="money-add-screen">
      <Text style={styles.title}>Add Expense</Text>
      <TextInput
        testID="money-add-name"
        accessibilityLabel="Name"
        placeholder="Name"
        placeholderTextColor={colors.muted}
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        testID="money-add-amount"
        accessibilityLabel="Amount"
        placeholder="Amount"
        placeholderTextColor={colors.muted}
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={styles.input}
      />
      <Pressable
        testID="money-add-submit"
        accessibilityRole="button"
        accessibilityLabel="Add Expense"
        onPress={handleAdd}
        style={styles.button}
      >
        <Text style={styles.buttonLabel}>Add Expense</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgAlt,
    padding: spacing.s4,
  },
  title: {
    ...typography.titleLg,
    color: colors.fg,
    marginBottom: spacing.s3,
  },
  input: {
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    paddingHorizontal: spacing.s2,
    paddingVertical: spacing.s2,
    marginBottom: spacing.s2,
    ...typography.body,
    color: colors.textStrong,
  },
  button: {
    backgroundColor: colors.accent,
    borderRadius: radii.lg,
    paddingVertical: spacing.s2,
    alignItems: 'center',
    marginTop: spacing.s2,
  },
  buttonLabel: {
    ...typography.body,
    color: colors.onAccent,
  },
});
