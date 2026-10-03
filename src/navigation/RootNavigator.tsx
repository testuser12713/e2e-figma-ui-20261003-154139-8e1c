import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardMenuScreen from '../screens/DashboardMenuScreen';
import DashboardScreen from '../screens/DashboardScreen';
import DashboardStatsScreen from '../screens/DashboardStatsScreen';
import MoneyAddScreen from '../screens/MoneyAddScreen';
import MoneyDetailScreen from '../screens/MoneyDetailScreen';
import MoneyManagementScreen from '../screens/MoneyManagementScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import { colors } from '../theme';
import type { MainTabParamList, RootStackParamList } from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.iconInactive,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarButtonTestID: 'tab-dashboard',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Money"
        component={MoneyManagementScreen}
        options={{
          tabBarButtonTestID: 'tab-money',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wallet-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen name="Onboarding" component={OnboardingScreen} />
        <RootStack.Screen name="Main" component={MainTabs} />
        <RootStack.Screen name="DashboardMenu" component={DashboardMenuScreen} />
        <RootStack.Screen
          name="DashboardStats"
          component={DashboardStatsScreen}
        />
        <RootStack.Screen name="MoneyDetail" component={MoneyDetailScreen} />
        <RootStack.Screen name="MoneyAdd" component={MoneyAddScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
