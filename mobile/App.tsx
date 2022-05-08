import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import 'src/i18n';
import { AppNavigator } from 'src/navigation';
import { store } from 'src/redux/store';
import { initFonts } from 'src/themes/fonts';

const App = () => {
  LogBox.ignoreAllLogs();

  useEffect(() => {
    (async () => {
      await initFonts();
    })();
  }, []);

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
