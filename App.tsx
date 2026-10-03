import { Actor_400Regular } from '@expo-google-fonts/actor';
import { Aleo_700Bold } from '@expo-google-fonts/aleo';
import {
  Inter_100Thin,
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter';
import { Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/navigation/RootNavigator';
import { TransactionsProvider } from './src/store/transactions';

export default function App() {
  const [fontsLoaded] = useFonts({
    Actor_400Regular,
    Aleo_700Bold,
    Inter_100Thin,
    Inter_400Regular,
    Inter_500Medium,
    Ubuntu_400Regular,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <TransactionsProvider>
        <StatusBar style="auto" />
        <RootNavigator />
      </TransactionsProvider>
    </SafeAreaProvider>
  );
}
