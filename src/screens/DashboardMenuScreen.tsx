import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import type { RootStackParamList } from '../navigation/types';
import { colors, fonts } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'DashboardMenu'>;

const shadow = {
  shadowColor: '#000000',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.16,
  shadowRadius: 16,
  elevation: 4,
} as const;

export default function DashboardMenuScreen({ navigation }: Props) {
  const close = () => navigation.goBack();

  return (
    <View style={styles.container} testID="dashboard-menu-screen">
      <Pressable
        testID="dashboard-menu-scrim"
        accessibilityRole="button"
        accessibilityLabel="Close menu"
        onPress={close}
        style={styles.scrim}
      />

      <View style={styles.drawer}>
        <View style={styles.drawerHeader}>
          <Image
            source={require('../../design/figma/assets/profile-image.png')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Sophie Garnier</Text>
          <Text style={styles.profileLocation}>Luxembourg</Text>
          <Pressable
            testID="dashboard-menu-close"
            accessibilityRole="button"
            accessibilityLabel="Close menu"
            onPress={close}
            hitSlop={8}
            style={styles.closeButton}
          >
            <Image
              source={require('../../design/figma/assets/icon-13x13.png')}
              style={styles.closeIcon}
            />
          </Pressable>
        </View>

        <Pressable
          testID="dashboard-menu-statistics"
          accessibilityRole="button"
          accessibilityLabel="Statistics"
          onPress={() => navigation.navigate('DashboardStats')}
          style={styles.itemStatistics}
        >
          <Ionicons name="stats-chart" size={19} color={colors.fg} />
          <Text style={styles.itemLabel}>Statistics</Text>
        </Pressable>

        <View style={styles.itemAccount}>
          <Image
            source={require('../../design/figma/assets/noun-user-1335326-19x19.png')}
            style={styles.itemIcon19}
          />
          <Text style={styles.itemLabel}>Account Settings</Text>
        </View>

        <View style={styles.itemHelp}>
          <Image
            source={require('../../design/figma/assets/noun-info-1174604-17x17.png')}
            style={styles.itemIcon17}
          />
          <Text style={styles.itemLabel}>Help</Text>
        </View>

        <Pressable
          testID="dashboard-menu-logout"
          accessibilityRole="button"
          accessibilityLabel="Logout"
          onPress={() => navigation.navigate('Onboarding')}
          style={styles.itemLogout}
        >
          <Ionicons name="log-out" size={20} color={colors.fg} />
          <Text style={styles.itemLabel}>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.panel,
  },
  scrim: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.fg,
    opacity: 0.4,
  },
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 294,
    height: 1010,
    backgroundColor: colors.surface,
    ...shadow,
  },
  drawerHeader: {
    position: 'absolute',
    top: -1,
    left: 1,
    width: 294,
    height: 208,
    backgroundColor: colors.accent,
  },
  profileImage: {
    position: 'absolute',
    top: 87,
    left: 23,
    width: 75,
    height: 75,
    borderRadius: 999,
  },
  profileName: {
    position: 'absolute',
    top: 100,
    left: 106,
    fontFamily: fonts.display,
    fontSize: 16,
    lineHeight: 19,
    color: colors.fg,
  },
  profileLocation: {
    position: 'absolute',
    top: 126,
    left: 106,
    fontFamily: fonts.body,
    fontSize: 14,
    lineHeight: 17,
    color: colors.fg,
  },
  closeButton: {
    position: 'absolute',
    top: 79,
    left: 252,
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    width: 13,
    height: 13,
  },
  itemStatistics: {
    position: 'absolute',
    top: 246,
    left: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemAccount: {
    position: 'absolute',
    top: 301,
    left: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemHelp: {
    position: 'absolute',
    top: 357,
    left: 26,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemLogout: {
    position: 'absolute',
    top: 836,
    left: 22,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon19: {
    width: 19,
    height: 19,
  },
  itemIcon17: {
    width: 17,
    height: 17,
  },
  itemLabel: {
    marginLeft: 26,
    fontFamily: fonts.display,
    fontSize: 14,
    lineHeight: 17,
    color: colors.fg,
    opacity: 0.6,
  },
});
