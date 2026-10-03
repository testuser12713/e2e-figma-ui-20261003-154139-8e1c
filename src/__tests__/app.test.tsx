import { fireEvent, render } from '@testing-library/react-native';
import type { ReactElement } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

jest.mock('react-native-safe-area-context', () => {
  const React = require('react');
  const actual = jest.requireActual('react-native-safe-area-context');
  const metrics = {
    frame: { x: 0, y: 0, width: 320, height: 640 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
  };
  return {
    ...actual,
    initialWindowMetrics: metrics,
    useSafeAreaInsets: () => metrics.insets,
    useSafeAreaFrame: () => metrics.frame,
    SafeAreaProvider: ({ children }: { children: React.ReactNode }) =>
      React.createElement(React.Fragment, null, children),
  };
});
import RootNavigator from '../navigation/RootNavigator';
import DashboardMenuScreen from '../screens/DashboardMenuScreen';
import DashboardStatsScreen from '../screens/DashboardStatsScreen';
import MoneyAddScreen from '../screens/MoneyAddScreen';
import MoneyDetailScreen from '../screens/MoneyDetailScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import { TransactionsProvider } from '../store/transactions';

function renderApp() {
  return render(
    <SafeAreaProvider>
      <TransactionsProvider>
        <RootNavigator />
      </TransactionsProvider>
    </SafeAreaProvider>,
  );
}

function renderScreen(element: ReactElement) {
  return render(
    <SafeAreaProvider>
      <TransactionsProvider>{element}</TransactionsProvider>
    </SafeAreaProvider>,
  );
}

const navigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
  canGoBack: jest.fn(),
  setOptions: jest.fn(),
} as never;

const route = { key: 'test-key', name: 'Test', params: undefined } as never;

describe('app navigation', () => {
  test('renders the onboarding screen first', async () => {
    const app = await renderApp();
    expect(app.getByTestId('onboarding-screen')).toBeTruthy();
    expect(app.getByTestId('onboarding-login')).toBeTruthy();
  });

  test('onboarding-login navigates to the tab bar', async () => {
    const app = await renderApp();
    await fireEvent.press(app.getByTestId('onboarding-login'));
    expect(app.getByTestId('dashboard-screen')).toBeTruthy();
    expect(app.getByTestId('tab-dashboard')).toBeTruthy();
    expect(app.getByTestId('tab-money')).toBeTruthy();
  });

  test('switches between the Dashboard and Money tabs', async () => {
    const app = await renderApp();
    await fireEvent.press(app.getByTestId('onboarding-login'));

    expect(app.getByTestId('dashboard-screen')).toBeTruthy();

    await fireEvent.press(app.getByTestId('tab-money'));
    expect(app.getByTestId('money-screen')).toBeTruthy();

    await fireEvent.press(app.getByTestId('tab-dashboard'));
    expect(app.getByTestId('dashboard-screen')).toBeTruthy();
  });
});

describe('registered screens render', () => {
  test('OnboardingScreen renders', async () => {
    const app = await renderScreen(
      <OnboardingScreen navigation={navigation} route={route} />,
    );
    expect(app.getByTestId('onboarding-screen')).toBeTruthy();
  });

  test('DashboardMenuScreen renders', async () => {
    const app = await renderScreen(
      <DashboardMenuScreen navigation={navigation} route={route} />,
    );
    expect(app.getByTestId('dashboard-menu-screen')).toBeTruthy();
  });

  test('DashboardStatsScreen renders', async () => {
    const app = await renderScreen(
      <DashboardStatsScreen navigation={navigation} route={route} />,
    );
    expect(app.getByTestId('dashboard-stats-screen')).toBeTruthy();
  });

  test('MoneyDetailScreen renders', async () => {
    const app = await renderScreen(
      <MoneyDetailScreen
        navigation={navigation}
        route={{ key: 'detail', name: 'MoneyDetail', params: { transactionId: '1' } } as never}
      />,
    );
    expect(app.getByTestId('money-detail-screen')).toBeTruthy();
  });

  test('MoneyAddScreen renders', async () => {
    const app = await renderScreen(
      <MoneyAddScreen navigation={navigation} route={route} />,
    );
    expect(app.getByTestId('money-add-screen')).toBeTruthy();
  });
});
