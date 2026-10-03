import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { RootStackParamList } from '../navigation/types';
import { colors, fonts, radii, spacing, typography } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

export default function OnboardingScreen({ navigation }: Props) {
  return (
    <View style={styles.container} testID="onboarding-screen">
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>Business-Handler</Text>
      <Pressable
        testID="onboarding-login"
        accessibilityRole="button"
        accessibilityLabel="Next"
        onPress={() => navigation.navigate('Main', { screen: 'Dashboard' })}
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      >
        <Text style={styles.buttonLabel}>Next</Text>
      </Pressable>
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
    ...typography.titleXl,
    color: colors.fg,
  },
  subtitle: {
    ...typography.body,
    color: colors.muted,
    marginTop: spacing.s1,
    marginBottom: spacing.s6,
  },
  button: {
    backgroundColor: colors.accent,
    borderRadius: radii.lg,
    paddingHorizontal: spacing.s3,
    paddingVertical: spacing.s2,
    minWidth: 115,
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonLabel: {
    fontFamily: fonts.body,
    fontSize: 15,
    lineHeight: 19,
    color: colors.onAccent,
  },
});
