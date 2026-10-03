import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import type { RootStackParamList } from '../navigation/types';
import { colors, spacing, typography } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'DashboardMenu'>;

export default function DashboardMenuScreen(_props: Props) {
  return (
    <View style={styles.container} testID="dashboard-menu-screen">
      <Text style={styles.title}>Dashboard Menu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.panel,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.s4,
  },
  title: {
    ...typography.titleLg,
    color: colors.fg,
  },
});
