import React, { useEffect } from "react";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import FlashMessage from "react-native-flash-message";
import { AppNavigator } from "src/navigation";
import "src/i18n";
import { initFonts } from "src/themes/fonts";
import { store } from "src/redux/store";

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
