import type { NavigatorScreenParams } from '@react-navigation/native';

export type MainTabParamList = {
  Dashboard: undefined;
  Money: undefined;
};

export type RootStackParamList = {
  Onboarding: undefined;
  Main: NavigatorScreenParams<MainTabParamList>;
  DashboardMenu: undefined;
  DashboardStats: undefined;
  MoneyDetail: { transactionId: string };
  MoneyAdd: undefined;
};
