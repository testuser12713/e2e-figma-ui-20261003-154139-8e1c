import { Feather } from '@expo/vector-icons';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography } from '../theme';
import type { MainTabParamList, RootStackParamList } from './types';

type IconName = keyof typeof Feather.glyphMap;

type Slot = {
  key: string;
  label: string;
  icon: IconName;
  iconSize: number;
  routeName?: keyof MainTabParamList;
};

const BAR_HEIGHT = 77;
const FAB_WIDTH = 64;
const FAB_HEIGHT = 63;
const FAB_OVERHANG = 41;

const SLOTS: Slot[] = [
  {
    key: 'home',
    label: 'Home',
    icon: 'home',
    iconSize: 22,
    routeName: 'Dashboard',
  },
  {
    key: 'shop',
    label: 'Products',
    icon: 'shopping-bag',
    iconSize: 19,
    routeName: 'Money',
  },
  { key: 'liked', label: 'Liked', icon: 'heart', iconSize: 20 },
  { key: 'today', label: 'Today', icon: 'user-check', iconSize: 15 },
];

export default function TabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const activeRoute = state.routes[state.index]?.name;

  const handleTabPress = (routeName: keyof MainTabParamList) => {
    const route = state.routes.find((r) => r.name === routeName);
    if (!route) {
      return;
    }
    const isFocused = activeRoute === routeName;
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });
    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(routeName);
    }
  };

  const handleFabPress = () => {
    navigation
      .getParent<NativeStackNavigationProp<RootStackParamList>>()
      ?.navigate('MoneyAdd');
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <View style={styles.bar}>
        <View style={styles.slots}>
          {SLOTS.slice(0, 2).map((slot) => {
            const route = state.routes.find((r) => r.name === slot.routeName);
            if (!route || !slot.routeName) {
              return null;
            }
            const isActive = activeRoute === slot.routeName;
            const color = isActive ? colors.accent : colors.iconInactive;
            const testID = descriptors[route.key].options.tabBarButtonTestID;
            return (
              <Pressable
                key={slot.key}
                testID={testID}
                accessibilityRole="tab"
                accessibilityLabel={slot.label}
                accessibilityState={{ selected: isActive }}
                onPress={() => handleTabPress(slot.routeName as keyof MainTabParamList)}
                style={({ pressed }) => [
                  styles.slot,
                  pressed && styles.slotPressed,
                ]}
              >
                <Feather
                  name={slot.icon}
                  size={slot.iconSize}
                  color={color}
                />
                <Text style={[styles.label, { color }]}>{slot.label}</Text>
              </Pressable>
            );
          })}

          <View style={styles.slot} />

          {SLOTS.slice(2).map((slot) => (
            <View key={slot.key} style={styles.slot}>
              <Feather
                name={slot.icon}
                size={slot.iconSize}
                color={colors.iconInactive}
              />
              <Text style={[styles.label, { color: colors.iconInactive }]}>
                {slot.label}
              </Text>
            </View>
          ))}
        </View>

        <Pressable
          testID="tab-fab"
          accessibilityRole="button"
          accessibilityLabel="Add"
          onPress={handleFabPress}
          style={({ pressed }) => [styles.fab, pressed && styles.fabPressed]}
        >
          <LinearGradient
            colors={[colors.accent, colors.accentGradientEnd]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.fabGradient}
          >
            <View style={styles.plus}>
              <View style={styles.plusHorizontal} />
              <View style={styles.plusVertical} />
            </View>
          </LinearGradient>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  bar: {
    height: BAR_HEIGHT,
    backgroundColor: colors.surface,
    shadowColor: colors.shadowTint,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 8,
  },
  slots: {
    flex: 1,
    flexDirection: 'row',
  },
  slot: {
    flex: 1,
    height: BAR_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slotPressed: {
    opacity: 0.85,
  },
  label: {
    ...typography.tabLabel,
    marginTop: 6,
  },
  fab: {
    position: 'absolute',
    top: -FAB_OVERHANG,
    left: '50%',
    marginLeft: -FAB_WIDTH / 2,
    width: FAB_WIDTH,
    height: FAB_HEIGHT,
    borderRadius: 999,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 40,
    elevation: 12,
  },
  fabPressed: {
    opacity: 0.92,
  },
  fabGradient: {
    flex: 1,
    borderRadius: 999,
    borderWidth: 4,
    borderColor: colors.surface,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    width: 20,
    height: 20,
  },
  plusHorizontal: {
    position: 'absolute',
    left: 0,
    top: 8.5,
    width: 20,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: colors.onAccent,
  },
  plusVertical: {
    position: 'absolute',
    left: 8.5,
    top: 0,
    width: 3,
    height: 20,
    borderRadius: 1.5,
    backgroundColor: colors.onAccent,
  },
});
