import { fireEvent, render } from '@testing-library/react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

jest.mock('react-native-safe-area-context', () => {
  const React = require('react');
  const actual = jest.requireActual('react-native-safe-area-context');
  const metrics = {
    frame: { x: 0, y: 0, width: 414, height: 896 },
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

describe('dashboard', () => {
  test('renders the dashboard with cards after login', async () => {
    const app = await renderApp();
    await fireEvent.press(app.getByTestId('onboarding-login'));

    expect(app.getByTestId('dashboard-screen')).toBeTruthy();
    expect(app.getByText('Time Management')).toBeTruthy();
    expect(app.getByText('Money Management')).toBeTruthy();
    expect(app.getByText('Food Management')).toBeTruthy();
    expect(app.getByText('App Management')).toBeTruthy();
  });

  test('menu opens and closes', async () => {
    const app = await renderApp();
    await fireEvent.press(app.getByTestId('onboarding-login'));

    await fireEvent.press(app.getByTestId('dashboard-menu-icon'));
    expect(app.getByTestId('dashboard-menu-screen')).toBeTruthy();
    expect(app.getByText('Sophie Garnier')).toBeTruthy();

    await fireEvent.press(app.getByTestId('dashboard-menu-close'));
    expect(app.getByTestId('dashboard-screen')).toBeTruthy();
    expect(app.queryByTestId('dashboard-menu-screen')).toBeNull();
  });

  test('Statistics opens the stats view and navigates back', async () => {
    const app = await renderApp();
    await fireEvent.press(app.getByTestId('onboarding-login'));

    await fireEvent.press(app.getByTestId('dashboard-menu-icon'));
    await fireEvent.press(app.getByTestId('dashboard-menu-statistics'));

    expect(app.getByTestId('dashboard-stats-screen')).toBeTruthy();
    expect(app.getByText('Statistics')).toBeTruthy();
    expect(app.getByText('Since 21. Dec')).toBeTruthy();

    await fireEvent.press(app.getByTestId('dashboard-stats-back'));
    expect(app.getByTestId('dashboard-menu-screen')).toBeTruthy();
  });
});
