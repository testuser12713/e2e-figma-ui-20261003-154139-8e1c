import { fireEvent, render } from '@testing-library/react-native';
import OnboardingScreen from '../screens/OnboardingScreen';

const navigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

const route = { key: 'onboarding', name: 'Onboarding', params: undefined };

function renderOnboarding() {
  return render(
    <OnboardingScreen
      navigation={navigation as never}
      route={route as never}
    />,
  );
}

describe('OnboardingScreen', () => {
  beforeEach(() => {
    navigation.navigate.mockClear();
  });

  test('renders all three slides', async () => {
    const screen = await renderOnboarding();
    expect(screen.getByTestId('onboarding-screen')).toBeTruthy();
    expect(screen.getByTestId('onboarding-slide-1')).toBeTruthy();
    expect(screen.getByTestId('onboarding-slide-2')).toBeTruthy();
    expect(screen.getByTestId('onboarding-slide-3')).toBeTruthy();
  });

  test('Login button navigates to Main', async () => {
    const screen = await renderOnboarding();
    await fireEvent.press(screen.getByTestId('onboarding-login'));
    expect(navigation.navigate).toHaveBeenCalledWith('Main', {
      screen: 'Dashboard',
    });
  });

  test('Skip step navigates to Main', async () => {
    const screen = await renderOnboarding();
    await fireEvent.press(screen.getByTestId('onboarding-skip'));
    expect(navigation.navigate).toHaveBeenCalledWith('Main', {
      screen: 'Dashboard',
    });
  });
});
