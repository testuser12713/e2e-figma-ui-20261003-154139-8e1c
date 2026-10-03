import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import type { RootStackParamList } from '../navigation/types';
import { colors, spacing, typography } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'DashboardStats'>;

export default function DashboardStatsScreen(_props: Props) {
  return (
    <View style={styles.container} testID="dashboard-stats-screen">
      <Text style={styles.title}>Dashboard Stats</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.s4,
  },
  title: {
    ...typography.titleLg,
    color: colors.fg,
  },
});
