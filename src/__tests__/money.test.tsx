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
import MoneyAddScreen from '../screens/MoneyAddScreen';
import MoneyDetailScreen from '../screens/MoneyDetailScreen';
import MoneyManagementScreen from '../screens/MoneyManagementScreen';
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

function renderWithProvider(element: ReactElement) {
  return render(
    <SafeAreaProvider>
      <TransactionsProvider>{element}</TransactionsProvider>
    </SafeAreaProvider>,
  );
}

const goBack = jest.fn();
const navigation = {
  navigate: jest.fn(),
  goBack,
  canGoBack: jest.fn(),
  setOptions: jest.fn(),
} as never;

const moneyRoute = { key: 'money', name: 'Money', params: undefined } as never;

describe('Money Management', () => {
  test('renders the transaction list from the store', async () => {
    const app = await renderWithProvider(
      <MoneyManagementScreen navigation={navigation} route={moneyRoute} />,
    );

    expect(app.getByTestId('money-screen')).toBeTruthy();
    expect(app.getByText('Spend On Fun Mall Cinema')).toBeTruthy();
    expect(app.getByText('Spend On Starbucks')).toBeTruthy();
    expect(app.getByText('23.00€')).toBeTruthy();
    expect(app.getByText('13.00€')).toBeTruthy();
  });

  test('an added transaction appears in the list', async () => {
    const app = await renderApp();

    await fireEvent.press(app.getByTestId('onboarding-login'));
    await fireEvent.press(app.getByTestId('tab-money'));
    expect(app.getByTestId('money-screen')).toBeTruthy();

    await fireEvent.press(app.getByTestId('money-add-button'));
    expect(app.getByTestId('money-add-screen')).toBeTruthy();

    await fireEvent.changeText(app.getByTestId('money-add-name'), 'Spend On Gym');
    await fireEvent.changeText(app.getByTestId('money-add-amount'), '18.50');
    await fireEvent.press(app.getByTestId('money-add-submit'));

    expect(app.getByTestId('money-screen')).toBeTruthy();
    expect(app.getByText('Spend On Gym')).toBeTruthy();
    expect(app.getByText('18.50€')).toBeTruthy();
  });

  test('tapping a transaction opens its detail, and back returns to the list', async () => {
    const app = await renderApp();

    await fireEvent.press(app.getByTestId('onboarding-login'));
    await fireEvent.press(app.getByTestId('tab-money'));

    await fireEvent.press(app.getByTestId('transaction-1'));
    expect(app.getByTestId('money-detail-screen')).toBeTruthy();
    expect(app.getByText('weekly report')).toBeTruthy();

    await fireEvent.press(app.getByTestId('money-detail-back'));
    expect(app.getByTestId('money-screen')).toBeTruthy();
  });
});

describe('MoneyDetailScreen', () => {
  test('renders the weekly report with example posts', async () => {
    const app = await renderWithProvider(
      <MoneyDetailScreen
        navigation={navigation}
        route={
          {
            key: 'detail',
            name: 'MoneyDetail',
            params: { transactionId: '1' },
          } as never
        }
      />,
    );

    expect(app.getByTestId('money-detail-screen')).toBeTruthy();
    expect(app.getByText('weekly report')).toBeTruthy();
    expect(app.getByText('Spend On Fun Mall Cinema')).toBeTruthy();
    expect(app.getByText('Spend On Starbucks')).toBeTruthy();
    expect(app.getByText('23.00€')).toBeTruthy();
    expect(app.getByText('13.00€')).toBeTruthy();
  });

  test('back button returns to the previous screen', async () => {
    const app = await renderWithProvider(
      <MoneyDetailScreen
        navigation={navigation}
        route={
          {
            key: 'detail',
            name: 'MoneyDetail',
            params: { transactionId: '1' },
          } as never
        }
      />,
    );

    await fireEvent.press(app.getByTestId('money-detail-back'));
    expect(goBack).toHaveBeenCalled();
  });
});

describe('MoneyAddScreen', () => {
  test('renders the add expense form fields', async () => {
    const app = await renderWithProvider(
      <MoneyAddScreen navigation={navigation} route={moneyRoute} />,
    );

    expect(app.getByTestId('money-add-screen')).toBeTruthy();
    expect(app.getByTestId('money-add-name')).toBeTruthy();
    expect(app.getByTestId('money-add-description')).toBeTruthy();
    expect(app.getByTestId('money-add-amount')).toBeTruthy();
    expect(app.getByTestId('money-add-date')).toBeTruthy();
    expect(app.getByTestId('money-add-submit')).toBeTruthy();
  });
});
