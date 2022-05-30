import React, { useEffect, useState } from 'react';
import { LogBox } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import 'src/i18n';
import { AppNavigator } from 'src/navigation';
import { store } from 'src/redux/store';
import { initFonts } from 'src/themes/fonts';

const App = () => {
  const [areFontsLoaded, setAreFontsLoaded] = useState(false);
  LogBox.ignoreAllLogs();

  useEffect(() => {
    (async () => {
      await initFonts();
      setAreFontsLoaded(true);
    })();
  }, []);

  if (!areFontsLoaded) return null;

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Provider store={store}>
        <FlashMessage position="top" />
        <AppNavigator />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
