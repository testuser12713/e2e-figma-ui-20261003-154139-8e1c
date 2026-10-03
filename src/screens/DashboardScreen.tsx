import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import type { MainTabParamList } from '../navigation/types';
import { colors, spacing, typography } from '../theme';

type Props = BottomTabScreenProps<MainTabParamList, 'Dashboard'>;

export default function DashboardScreen(_props: Props) {
  return (
    <View style={styles.container} testID="dashboard-screen">
      <Text style={styles.title}>Dashboard</Text>
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
