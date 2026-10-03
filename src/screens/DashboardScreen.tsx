import { Ionicons } from '@expo/vector-icons';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import type { MainTabParamList, RootStackParamList } from '../navigation/types';
import { colors, fonts, radii } from '../theme';

type Props = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Dashboard'>,
  NativeStackScreenProps<RootStackParamList>
>;

const shadow = {
  shadowColor: '#000000',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.08,
  shadowRadius: 16,
  elevation: 4,
} as const;

export default function DashboardScreen({ navigation }: Props) {
  return (
    <View style={styles.container} testID="dashboard-screen">
      <View style={styles.header}>
        <Pressable
          testID="dashboard-menu-icon"
          accessibilityRole="button"
          accessibilityLabel="Open menu"
          onPress={() => navigation.navigate('DashboardMenu')}
          hitSlop={8}
          style={styles.menuButton}
        >
          <Ionicons name="menu" size={18} color={colors.onAccent} />
        </Pressable>
        <Image
          source={require('../../design/figma/assets/noun-user-1335326.png')}
          style={styles.headerUserIcon}
        />
        <Text style={styles.headerTitle}>Dashboard</Text>
      </View>

      <View style={styles.search}>
        <Text style={styles.searchPlaceholder}>Search</Text>
        <Ionicons
          name="search"
          size={16}
          color={colors.textStrong}
          style={styles.searchIcon}
        />
      </View>

      <View style={[styles.card, styles.cardTime]}>
        <Text style={styles.cardTitle}>Time Management</Text>
        <Image
          source={require('../../design/figma/assets/illustration-128x114.png')}
          style={styles.cardIllustrationTime}
        />
      </View>

      <View style={[styles.card, styles.cardMoney]}>
        <Text style={styles.cardTitle}>Money Management</Text>
        <Image
          source={require('../../design/figma/assets/illustration-118x109.png')}
          style={styles.cardIllustrationMoney}
        />
      </View>

      <View style={[styles.card, styles.cardFood]}>
        <Text style={styles.cardTitle}>Food Management</Text>
        <Image
          source={require('../../design/figma/assets/undraw-personal-site-xyd1.png')}
          style={styles.cardIllustrationFood}
        />
      </View>

      <View style={[styles.card, styles.cardApp]}>
        <Text style={styles.cardTitle}>App Management</Text>
        <Image
          source={require('../../design/figma/assets/illustration-120x133.png')}
          style={styles.cardIllustrationApp}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 414,
    height: 126,
    backgroundColor: colors.accent,
    ...shadow,
  },
  menuButton: {
    position: 'absolute',
    top: 25,
    left: 12,
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerUserIcon: {
    position: 'absolute',
    top: 25,
    left: 367,
    width: 27,
    height: 27,
  },
  headerTitle: {
    position: 'absolute',
    top: 62,
    left: 18,
    fontFamily: fonts.display,
    fontSize: 24,
    lineHeight: 29,
    color: colors.onAccent,
  },
  search: {
    position: 'absolute',
    top: 165,
    left: 40,
    width: 334,
    height: 43,
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    ...shadow,
  },
  searchPlaceholder: {
    position: 'absolute',
    top: 11,
    left: 16,
    fontFamily: fonts.body,
    fontSize: 16,
    lineHeight: 19,
    color: colors.textStrong,
    opacity: 0.2,
  },
  searchIcon: {
    position: 'absolute',
    top: 13,
    left: 300,
  },
  card: {
    position: 'absolute',
    width: 157,
    height: 280,
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    ...shadow,
  },
  cardTime: {
    top: 245,
    left: 40,
  },
  cardMoney: {
    top: 245,
    left: 218,
  },
  cardFood: {
    top: 545,
    left: 218,
  },
  cardApp: {
    top: 545,
    left: 39,
  },
  cardTitle: {
    position: 'absolute',
    top: 19,
    left: 15,
    width: 129,
    fontFamily: fonts.display,
    fontSize: 16,
    lineHeight: 19,
    color: colors.fg,
  },
  cardIllustrationTime: {
    position: 'absolute',
    top: 93,
    left: 15,
    width: 128,
    height: 114,
  },
  cardIllustrationMoney: {
    position: 'absolute',
    top: 101,
    left: 19,
    width: 118,
    height: 109,
  },
  cardIllustrationFood: {
    position: 'absolute',
    top: 91,
    left: 32,
    width: 88,
    height: 130,
  },
  cardIllustrationApp: {
    position: 'absolute',
    top: 85,
    left: 15,
    width: 120,
    height: 133,
  },
});
